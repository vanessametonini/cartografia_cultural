import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatelocationDto } from './dto/create-location.dto';
import { CreatePinDto } from './dto/create-pin.dto';
import { UpdatePinDto } from './dto/update-pin.dto';
import { Pin, PinDocument } from './schemas/pin.schema';

@Injectable()
export class PinsService {
  constructor(
    @InjectModel(Pin.name) private pinModel: Model<PinDocument>,
    private httpService: HttpService,
    private configService: ConfigService
  ) { }

  async create(createPinDto: CreatePinDto): Promise<any> {
    const {street, city, number} = createPinDto;
    const address = {
      street,
      city,
      county: "campo grande",
      state: "mato grosso do sul",
      number,
      postalcode: createPinDto.zipcode
    }
    createPinDto = {...createPinDto, ...(await this.getLocation(address))};
    const createdPin = new this.pinModel(createPinDto);
    const {id , lat , long} = (await createdPin.save()).toJSON();
    return { id, lat, long };
  }

  findAll(): Promise<Pin[]> {
    return this.pinModel.find().exec();
  }

  async getLocation(createlocationDto: CreatelocationDto): Promise<any> {
    const { street, number, county, city, state, postalcode } = createlocationDto;
    const streetAndNumber = street + ', ' + number.toString();
    const data = {
      params: {
        street: streetAndNumber,
        county: county,
        city: city,
        state: state,
        postalcode: postalcode.toString()
      }
    }
    const url = `https://us1.locationiq.com/v1/search.php?key=${this.configService.get<string>('privatetoken')}&format=json`
    return await this.httpService.get(url, data).toPromise()
      .then(res => {
        return {
          lat: parseFloat(res.data[0].lat),
          long: parseFloat(res.data[0].lon)
        }
      })
      .catch(err => err)
  }

  async findOne(id: string): Promise<Pin> {
    return await this.pinModel.findOne({ _id: id });
  }

  async update(id: string, updatePinDto: UpdatePinDto): Promise<Pin> {
    return this.pinModel.findByIdAndUpdate({ _id: id }, updatePinDto).exec();
  }

  async remove(id: string): Promise<Pin> {
    return await this.pinModel.findOneAndDelete({ _id: id }).exec();
  }
}
