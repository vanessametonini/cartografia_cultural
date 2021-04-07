'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">plataforma-cultural-api-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' : 'data-target="#xs-controllers-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' :
                                            'id="xs-controllers-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' : 'data-target="#xs-injectables-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' :
                                        'id="xs-injectables-links-module-AppModule-01d1a51b8f0b014ad541d988cda1889c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a2ec2ce2918653093b623f8474468398"' : 'data-target="#xs-injectables-links-module-AuthModule-a2ec2ce2918653093b623f8474468398"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a2ec2ce2918653093b623f8474468398"' :
                                        'id="xs-injectables-links-module-AuthModule-a2ec2ce2918653093b623f8474468398"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaslModule.html" data-type="entity-link">CaslModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link">CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' : 'data-target="#xs-controllers-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' :
                                            'id="xs-controllers-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' : 'data-target="#xs-injectables-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' :
                                        'id="xs-injectables-links-module-CategoriesModule-57b2e37dd4cd8a129093218f245e48b6"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventsModule.html" data-type="entity-link">EventsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' : 'data-target="#xs-controllers-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' :
                                            'id="xs-controllers-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' }>
                                            <li class="link">
                                                <a href="controllers/EventsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' : 'data-target="#xs-injectables-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' :
                                        'id="xs-injectables-links-module-EventsModule-409ffe41b1332ba133824d115621ed24"' }>
                                        <li class="link">
                                            <a href="injectables/EventsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link">FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' : 'data-target="#xs-controllers-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' :
                                            'id="xs-controllers-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' : 'data-target="#xs-injectables-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' :
                                        'id="xs-injectables-links-module-FilesModule-f4b1b334ed2e524625c95eba1b66f5ce"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FilesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GridFsMulterConfigService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GridFsMulterConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LikesModule.html" data-type="entity-link">LikesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LikesModule-8157ca167489bff18535bf884300d858"' : 'data-target="#xs-controllers-links-module-LikesModule-8157ca167489bff18535bf884300d858"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LikesModule-8157ca167489bff18535bf884300d858"' :
                                            'id="xs-controllers-links-module-LikesModule-8157ca167489bff18535bf884300d858"' }>
                                            <li class="link">
                                                <a href="controllers/LikesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LikesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LikesModule-8157ca167489bff18535bf884300d858"' : 'data-target="#xs-injectables-links-module-LikesModule-8157ca167489bff18535bf884300d858"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LikesModule-8157ca167489bff18535bf884300d858"' :
                                        'id="xs-injectables-links-module-LikesModule-8157ca167489bff18535bf884300d858"' }>
                                        <li class="link">
                                            <a href="injectables/LikesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LikesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PinsModule.html" data-type="entity-link">PinsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' : 'data-target="#xs-controllers-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' :
                                            'id="xs-controllers-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' }>
                                            <li class="link">
                                                <a href="controllers/PinsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PinsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' : 'data-target="#xs-injectables-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' :
                                        'id="xs-injectables-links-module-PinsModule-91096b0c35be27206a782d75b0d11f62"' }>
                                        <li class="link">
                                            <a href="injectables/PinsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PinsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RejoindersModule.html" data-type="entity-link">RejoindersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' : 'data-target="#xs-controllers-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' :
                                            'id="xs-controllers-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' }>
                                            <li class="link">
                                                <a href="controllers/RejoindersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RejoindersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' : 'data-target="#xs-injectables-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' :
                                        'id="xs-injectables-links-module-RejoindersModule-2694d82b84662950e535c0528e29f401"' }>
                                        <li class="link">
                                            <a href="injectables/RejoindersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RejoindersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RepliesModule.html" data-type="entity-link">RepliesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' : 'data-target="#xs-controllers-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' :
                                            'id="xs-controllers-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' }>
                                            <li class="link">
                                                <a href="controllers/RepliesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RepliesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' : 'data-target="#xs-injectables-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' :
                                        'id="xs-injectables-links-module-RepliesModule-acd87a52dc84ac6d810745e6afe5fb67"' }>
                                        <li class="link">
                                            <a href="injectables/RepliesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RepliesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeedsModule.html" data-type="entity-link">SeedsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SeedsModule-7c7aa6dccb9397b361fe6a8922f9c8d4"' : 'data-target="#xs-injectables-links-module-SeedsModule-7c7aa6dccb9397b361fe6a8922f9c8d4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeedsModule-7c7aa6dccb9397b361fe6a8922f9c8d4"' :
                                        'id="xs-injectables-links-module-SeedsModule-7c7aa6dccb9397b361fe6a8922f9c8d4"' }>
                                        <li class="link">
                                            <a href="injectables/AppSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CategoriesSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CategoriesSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventsSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventsSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LikesSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LikesSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PinsSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PinsSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RejoindersSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RejoindersSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepliesSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RepliesSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SupportsSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SupportsSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TopicsSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TopicsSeed</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersSeed.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersSeed</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SupportsModule.html" data-type="entity-link">SupportsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' : 'data-target="#xs-controllers-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' :
                                            'id="xs-controllers-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' }>
                                            <li class="link">
                                                <a href="controllers/SupportsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupportsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' : 'data-target="#xs-injectables-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' :
                                        'id="xs-injectables-links-module-SupportsModule-a545adbdbe9b6c0c3e58307cf94e373a"' }>
                                        <li class="link">
                                            <a href="injectables/SupportsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SupportsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TopicsModule.html" data-type="entity-link">TopicsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' : 'data-target="#xs-controllers-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' :
                                            'id="xs-controllers-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' }>
                                            <li class="link">
                                                <a href="controllers/TopicsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopicsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' : 'data-target="#xs-injectables-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' :
                                        'id="xs-injectables-links-module-TopicsModule-6c1aa58d3ed450dcd4e1132a3018cfa4"' }>
                                        <li class="link">
                                            <a href="injectables/TopicsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TopicsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' : 'data-target="#xs-controllers-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' :
                                            'id="xs-controllers-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' : 'data-target="#xs-injectables-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' :
                                        'id="xs-injectables-links-module-UsersModule-cbcfcb73ada310f8b4d6050fccca54d3"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link">CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EventsController.html" data-type="entity-link">EventsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link">FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LikesController.html" data-type="entity-link">LikesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PinsController.html" data-type="entity-link">PinsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RejoindersController.html" data-type="entity-link">RejoindersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RepliesController.html" data-type="entity-link">RepliesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SupportsController.html" data-type="entity-link">SupportsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TopicsController.html" data-type="entity-link">TopicsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link">UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CaslAbilityFactory.html" data-type="entity-link">CaslAbilityFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link">Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link">CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEventDto.html" data-type="entity-link">CreateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link">CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLikeDto.html" data-type="entity-link">CreateLikeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatelocationDto.html" data-type="entity-link">CreatelocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePinDto.html" data-type="entity-link">CreatePinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRejoinderDto.html" data-type="entity-link">CreateRejoinderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateReplyDto.html" data-type="entity-link">CreateReplyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSupportDto.html" data-type="entity-link">CreateSupportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTopicDto.html" data-type="entity-link">CreateTopicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Event.html" data-type="entity-link">Event</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link">File</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileInfoVm.html" data-type="entity-link">FileInfoVm</a>
                            </li>
                            <li class="link">
                                <a href="classes/FileResponseVm.html" data-type="entity-link">FileResponseVm</a>
                            </li>
                            <li class="link">
                                <a href="classes/Like.html" data-type="entity-link">Like</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link">LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pin.html" data-type="entity-link">Pin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rejoinder.html" data-type="entity-link">Rejoinder</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reply.html" data-type="entity-link">Reply</a>
                            </li>
                            <li class="link">
                                <a href="classes/Support.html" data-type="entity-link">Support</a>
                            </li>
                            <li class="link">
                                <a href="classes/Topic.html" data-type="entity-link">Topic</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEventDto.html" data-type="entity-link">UpdateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link">UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLikeDto.html" data-type="entity-link">UpdateLikeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePinDto.html" data-type="entity-link">UpdatePinDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRejoinderDto.html" data-type="entity-link">UpdateRejoinderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateReplyDto.html" data-type="entity-link">UpdateReplyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSupportDto.html" data-type="entity-link">UpdateSupportDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTopicDto.html" data-type="entity-link">UpdateTopicDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppSeed.html" data-type="entity-link">AppSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link">AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesSeed.html" data-type="entity-link">CategoriesSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link">CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventsSeed.html" data-type="entity-link">EventsSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventsService.html" data-type="entity-link">EventsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link">FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GridFsMulterConfigService.html" data-type="entity-link">GridFsMulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link">JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikesSeed.html" data-type="entity-link">LikesSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikesService.html" data-type="entity-link">LikesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link">LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link">LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterUtils.html" data-type="entity-link">MulterUtils</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PinsSeed.html" data-type="entity-link">PinsSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PinsService.html" data-type="entity-link">PinsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RejoindersSeed.html" data-type="entity-link">RejoindersSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RejoindersService.html" data-type="entity-link">RejoindersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepliesSeed.html" data-type="entity-link">RepliesSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepliesService.html" data-type="entity-link">RepliesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupportsSeed.html" data-type="entity-link">SupportsSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SupportsService.html" data-type="entity-link">SupportsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TopicsSeed.html" data-type="entity-link">TopicsSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TopicsService.html" data-type="entity-link">TopicsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersSeed.html" data-type="entity-link">UsersSeed</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});