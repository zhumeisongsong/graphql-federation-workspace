# [1.6.0](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.5.0...v1.6.0) (2024-12-02)


### Features

* ✨ use awsCognitoService in AuthService ([c4c5889](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/c4c5889cf9ed915699a629a85d312d3b4d153a33))

# [1.5.0](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.4.1...v1.5.0) (2024-12-02)


### Bug Fixes

* 🐛 Add required dependencies to the auth module ([07b0d47](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/07b0d476b372d9d4940293ad4e6a050bbf599c05))
* 🐛 lint error ([f314ce9](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/f314ce993b74985c777e23b86ae8fccd7b085bc4))


### Features

* ✨ add AuthResolver ([07dd0a0](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/07dd0a0826d5e2a2bf67ea5c7939b5e2d0a874d8))
* ✨ initial @auth/interface-adapters ([ff5bace](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/ff5bacecacd967c84dcc9750f292317c95fe48eb))
* ✨ initial auth application ([e51d448](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e51d448e7820925489db5316a324403e4039dc05))
* ✨ initial AuthService with hard code ([e2a36c5](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e2a36c5692dac4a46c7fb1ea5893e35d7bf0ba9a))

## [1.4.1](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.4.0...v1.4.1) (2024-12-02)


### Bug Fixes

* **deps:** update dependencies ([5417a58](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5417a587533bf3140031fb1f48b2cbb5c94a801b))

# [1.4.0](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.3.0...v1.4.0) (2024-11-29)


### Bug Fixes

* 🐛 error spell of cognito ([e9d076e](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e9d076e631d628444b2359f7df8f048559ce2256))
* 🐛 remove getUser from AwsCognitoService ([3eed341](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/3eed341505875f9c3a244513eee8ca4b5e4dcdfb))


### Features

* ✨ add AwsCognitoService ([94ca82f](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/94ca82f59e898ed7d8a0e9e0a0bfde1d33e6fc81))
* ✨ Add token validation and improve error handling ([5a1fca5](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5a1fca54e844e7d8aed26a4af2c9730de3fab78c))
* ✨ enhance error handler of signIn ([f4407db](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/f4407db0f974f3d7708c32847d9c668519adf42c))
* ✨ Enhance password validation rules ([e9ccacc](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e9ccacc7f34305fa7aab0702520613f3c5715202))
* ✨ Enhance refresh token validation ([16b84f2](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/16b84f21322ba354c426380c594d7cc3b68a9cf6))
* ✨ Enhance security and error handling in signup flow ([8daf4cf](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/8daf4cfd3eb07383a5887b825cae98146e94153a))
* ✨ Fix error handling of confirmSignUp ([db2544f](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/db2544ffc48f0fc858ce4698cbba69158d7dc075))
* ✨ Fix inconsistent password validation error messages ([eb3250d](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/eb3250d9d58f821c66014375e6173e011adc5c71))
* ✨ initial aws cognito lib ([0ba9dca](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/0ba9dca2ea06cee76fdc1af644490b68ff6aefac))
* ✨ Prevent silent failures in ClientId handling ([2ac841a](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/2ac841aeb19831d50b61e235677c180a3adab3ca))
* ✨ Uncomment the rate limiting decorators ([067e1a9](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/067e1a945ecf58baf81822943a0f1e40188d6ea3))

# [1.3.0](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.2.4...v1.3.0) (2024-11-27)


### Bug Fixes

* 🐛 same contradictory constraints as firstName field ([656402c](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/656402ce9025a249f17b160c89f3379ca75b3f96))


### Features

* ✨ Add email format validation and uniqueness constraint ([382e302](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/382e302ee6ab7ae12b787d7e8654b62adec36e25))
* ✨ Add validation decorators，class-validator to DTO ([a4e2dd6](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/a4e2dd6509478e7f5db804bbd9b2329091c8fcab))
* ✨ update user attributes to nullable ([ca27362](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/ca27362cc225186b62126ace8f3540a0727429cd))
* ✨ update user entity in domain ([e59cd6e](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e59cd6e3ca26ed63a00c306708b9a47fed69b315))
* ✨ update UserDocument ([5699cd5](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5699cd55a805c08bf6971d7f214fcdbaa4e23b5a))
* ✨ update UserDto in resolver layer ([b66a109](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/b66a109e7b1260a7c5a4249b6c0d7e178046d4c9))

## [1.2.4](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.2.3...v1.2.4) (2024-11-25)


### Bug Fixes

* **deps:** update dependency graphql-tools to v9.0.4 ([4dae707](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/4dae7075f196d6f2a4a99b2e366b05c3c757629d))

## [1.2.3](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.2.2...v1.2.3) (2024-11-22)


### Bug Fixes

* **deps:** update dependencies ([089b93d](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/089b93d5afa70712ca5224fa04033130f5299415))

## [1.2.2](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.2.1...v1.2.2) (2024-11-20)


### Bug Fixes

* 🐛 new UserDto when getUser in Resolver ([2bfa005](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/2bfa0051edb8f0245d6781b0d56257e64db3c853))

## [1.2.1](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.2.0...v1.2.1) (2024-11-20)


### Bug Fixes

* 🐛 id for MongooseUsersRepository is not objectId ([b1990b9](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/b1990b96413b36cde1eab5e94081b9fd8a2f47f9))

# [1.2.0](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.1.0...v1.2.0) (2024-11-20)


### Bug Fixes

* 🐛 Inject GetUserUseCase in UsersModule ([bb583de](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/bb583de18104d259ae2b9bff5e0fe9d9fb2189ab))
* 🐛 Missing await for async repository call ([84db568](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/84db5681af6a7f89c954a3ebc28788b53aa5fff5))


### Features

* ✨ getUserUseCase in UsersService ([66310ac](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/66310ace6425babe7052e6686b4efa64826da026))
* ✨ import MongooseModule and provide USERS_REPOSITORY ([b386cdb](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/b386cdb7a08a48d1e56d15c6a63014ae0839881c))
* ✨ make GetUserUseCase be injectbale ([fae29b5](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/fae29b58feeac38075b9fdb3b813661c4146a9df))

# [1.1.0](https://github.com/zhumeisongsong/graphql-federation-workspace/compare/v1.0.0...v1.1.0) (2024-11-19)


### Bug Fixes

* 🐛 remove use less ts path ([d7d0e64](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/d7d0e640442985a71cc7a0da9b8a9dd4a10998e1))


### Features

* ✨ add lib of @user/infrastructure-mongoose ([f6958d8](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/f6958d8e67d4ec1279b19d615d1bc73779da1318))
* ✨ initial user infrastructure ([1944c6f](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/1944c6fe0c9ac745c5afd127be3f64c09e6ec146))
* ✨ remove user-infrastructure-mongoose ([9da264e](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/9da264e677fc22cfec45c73f46171a5b8787c132))

# 1.0.0 (2024-11-19)


### Bug Fixes

* 🐛 add compilerOptions to users/application ([dede2aa](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/dede2aa936cb58d52be755b54d70e7264f85b736))
* 🐛 Add return type to [@query](https://github.com/query) to fix the schema [@tag](https://github.com/tag) error ([aab9433](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/aab9433eb3f78fbd5844b086ebe41b465067e079))
* 🐛 Add type safety and validation for database configuration ([ae34fe3](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/ae34fe370d9fe21040547586f6ef5d4dd97e4724))
* 🐛 completedAt is optional ([b90e583](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/b90e583715c2e9cf56c9783cbde7755f2c5b84f4))
* 🐛 delete useless definition ([63355c4](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/63355c4f7b9b05a3fe5ff8001dabf23e2de1fb14))
* 🐛 import path of UsersService ([5b6b757](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5b6b757cf2e8a61903bf74bd5bbb2e9fb6f98d1d))
* 🐛 Nx Cloud Problems ([2cf334b](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/2cf334b10a0f9cf7d6f1c20b94ab63f38168e841))
* 🐛 outDir paths for the libs/shared/config directory ([4689025](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/4689025ce2e0cd7bd955bbd362a6f4984f83c3ee))
* 🐛 port string to number ([bb73162](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/bb73162dac6189b571c93bc61007d99d346c42a4))
* 🐛 remove @Directive('[@key](https://github.com/key)(fields: "id")') ([156abc4](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/156abc4c38fc05a5ed7a9222fc680530d475eda1))
* 🐛 remove findAllUsers ([29547f2](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/29547f2f2172703817c37f342f7957110957bb6b))
* 🐛 typo databse ([e72180f](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e72180fe25af25cbbd1b46bc5f2b6a3fcb623090))
* 🐛 Update configuration object with credentials ([0aac0d7](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/0aac0d7ad51df966cf261659883a1fa63b7b4fcb))
* **deps:** update dependency reflect-metadata to ^0.2.0 ([1c8d2e7](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/1c8d2e7d80711385aaaba149fabc88c68422ce7f))


### Features

* ✨ add @shared/infrastructure-mongoose ([0187f40](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/0187f40679aaa63fdafcb56fd1c640da9ed7c969))
* ✨ add @users/presentation-dto ([2cebfb3](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/2cebfb350a864502d712236696738d495b722af7))
* ✨ add ApolloGatewayDriverConfig ([5a60da6](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5a60da68677a3d178e124d1f002ec4ebf58cc85e))
* ✨ add compodoc ([9ad3134](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/9ad3134937b5f37a22dd272d170537439af033e7))
* ✨ Add constants of applocations config ([8ca7198](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/8ca719802071a124d89c5f38efaaa6ca0d3c2da9))
* ✨ add DailyPromptRecordEntity ([a55ad8b](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/a55ad8b9639f09e3c1b79c5d37bbaf9d67e91209))
* ✨ add DEFAULT_HOST ([1649ebc](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/1649ebc55d6910ce1474bbb7928b3e482edbddc3))
* ✨ add GetUserUsecase ([11b3e7f](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/11b3e7fc483335892b70e0a93764fbb19b377f4d))
* ✨ add interface ServiceConfig ([a9955e8](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/a9955e89bdded21f1396895b89b95c7e56a688ff))
* ✨ add subgraphsConfig ([dbea347](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/dbea347e942179c46d306e90ec815a32d3ddacac))
* ✨ add type WellbeingCategory ([0d1cc70](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/0d1cc704e266a9c804ebb5f92325fb8a69e8e812))
* ✨ add user entity ([5557035](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/555703596fc580cb11a3b8b079c356d578c8b3cb))
* ✨ add User model ([87f0649](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/87f0649c0fefec1bbf345f7a565e340ca8a26b34))
* ✨ add User model ([0629109](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/06291093c3c5af01bb50a3654e4be8afea61fed9))
* ✨ add user resolver ([e1697fa](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e1697fa0d403a27ffc9b06ae343e16a62a163279))
* ✨ add user resolver ([453a811](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/453a8111307920a081c19c52e4e7ccab88086f8a))
* ✨ add UserDto ([2048584](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/2048584d81922d46faa71ff9cc3522aa08fac7a7))
* ✨ add UserRepository ([264eafd](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/264eafd007d4040ab06f9e2aa106728ceaa4aa03))
* ✨ add users service ([59baaef](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/59baaefd67a8c8162f3c3b9c2e52b038f2d27160))
* ✨ add users service ([bd1047e](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/bd1047e48439dca984d825318fd411c758440b08))
* ✨ add wellbeing prompt entity ([030d27d](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/030d27dfcb2403c57f3f6d248960ee536f8fbf32))
* ✨ import DatabaseModule to UsersModule ([bed8f77](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/bed8f771d5aca591d86e180aa559634d4b871a82))
* ✨ import UsersModule in AppModule ([9f24bec](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/9f24bece3b860b9d680a7aea3274f95ff903216d))
* ✨ import UsersModule in AppModule ([12f75b4](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/12f75b4de6b5e6264232195955805c3a7a78a4fa))
* ✨ Initial applications-config lib ([e5f0915](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/e5f0915b1c8dd4141009e7dc146e4c0058ab365f))
* ✨ initial gateway app ([719ba22](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/719ba22a492bbd47fdc503b792e47337e0de9a4f))
* ✨ initial usecase of user ([1a7dd82](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/1a7dd82ff721ae2d5adc47cac3628a3ce6ecb926))
* ✨ initial user application ([ea43646](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/ea43646232475ae6d4a035a614978e1a490d89a1))
* ✨ Move users.resolver to users/presentation ([2787002](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/2787002a0d042f242a4053d6d88c2553adfe3307))
* ✨ rename return messages ([5388361](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5388361df04687585e16745ff01fc05aa24a4383))
* ✨ Replace hardcoded configuration ([9dc7f2d](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/9dc7f2db851b1a1bc6f4ddd154673477cff9b29a))
* ✨ Use DTO in resolver ([264a605](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/264a605b8febe8fcd4c79e78974ffa3d09c32ffb))
* ✨ users module ([da02ddc](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/da02ddc3816a6d0f6db20ad5ea27b2c5dbb69860))
* ✨ users module ([5713e9e](https://github.com/zhumeisongsong/graphql-federation-workspace/commit/5713e9e0978600bdc8f3bdb614d562d8bfe398f0))
