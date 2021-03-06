import axios from 'axios';
import  appConfig from '@appConfig'

import { Spin, Space } from 'antd';

const endpoint = appConfig.ENV().animalsEndpoint;

const stub = [
    {
        "generalInfo": {
            "id": "fdb73351-ed40-463e-9e55-f4c03d198501",
            "cardNumber": "1665з-20",
            "type": "собака",
            "year": "2016",
            "weight": "25",
            "nickname": "Варя 2",
            "gender": "женский",
            "breed": "метис",
            "color": "черный",
            "wool": "короткая",
            "ears": "полустоячие",
            "tail": "обычный",
            "size": "средний",
            "specialSigns": "нет",
            "aviary": "1"
        },
        "additionalInfo": {
            "id": "17a0df1b-a931-48a8-b428-907abe409a63",
            "identificationMark": "643094100731522",
            "isSterilized": true,
            "sterilizationDate": "2020-01-01",
            "sterilizationComment": "стерилизована ранее",
            "veterinarianEmployee": {
                "id": "160f7523-5cfd-41dc-9237-07084e3178fa",
                "name": "Врач 1",
                "type": "ветеринарный врач"
            },
            "isSocialized": true
        },
        "catchInfo": {
            "id": "472ea949-c3f9-46fe-a359-115e7dc0d45e",
            "actNumber": "128(1)",
            "catchOrder": {
                "id": "111bca96-a46d-4b56-b704-106a5fb11960",
                "orderActNumber": "128(1)",
                "orderActDate": "2020-10-04"
            },
            "administrativeDistrict": {
                "id": "0e20c5c7-4a8d-4ecf-907b-b08200c71a98",
                "name": "ЗелАО"
            },
            "address": {
                "unparsed": "Пятницкое ш., 37",
                "FIASCode": "",
                "latitude": "",
                "longitude": ""
            }
        },
        "newOwner": {
            "id": "c184211e-aa8f-4f07-b4c7-f3fd251f731f",
            "type": "юридическое лицо",
            "name": "ООО Добро Вместе",
            "documentNumber": "12(2)",
            "curators": [
                {
                    "id": "4d68edaa-9193-4c55-935c-5b911db1d4da",
                    "name": "Иванова Анна",
                    "type": "куратор"
                }
            ]
        },
        "animalMovements": [
            {
                "id": "4d68edaa-9193-4c55-935c-5b911db1d4da",
                "date": "2020-10-19",
                "type": "Выбытие из приюта",
                "documentNumber": "179з-20(подк.)",
                "additional": "смерть"
            },
            {
                "id": "4d68edaa-9193-4c55-935c-5b911db1d4dc",
                "date": "2020-05-11",
                "type": "Поступление животного в приют",
                "documentNumber": "17з-20(подк.)",
                "additional": ""
            }
        ],
        "shelter": {
            "id": "fe3c61e2-60c3-4fd3-8dda-b63271e279f8",
            "address": {
                "unparsed": "Пятницкое ш., 37",
                "FIASCode": "",
                "latitude": "",
                "longitude": ""
            },
            "serviceOrganization": "ГБУ Доринвест",
            "bossEmployee": {
                "id": "9e635e5f-09b0-4f04-918e-e0f837cd3ec2",
                "name": "Игнатов А.В."
            },
            "careEmployee": {
                "id": "9e635e5f-09b0-4f04-918e-e0f837cd3ec2",
                "name": "Работник 1 "
            }
        },
        "endoparasites": [
            {
                "id": "f332f833-d7a3-4632-b4ff-57253ae1e96a",
                "position": "1",
                "date": "2020-02-04",
                "medicationName": "Азинокс",
                "dose": "2.5 мл"
            }
        ],
        "vaccinations": [
            {
                "id": "a332f833-d7a3-4632-b4ff-57253ae1e96b",
                "position": "1",
                "date": "2020-02-04",
                "medicationName": "Бешенство Мультикан-6",
                "serialNumber": ""
            }
        ],
        "healthInfo": [
            {
                "id": "44cc31ac-4957-489c-ad2e-b8e85e36d1a12",
                "date": "2020-09-28",
                "anamnesis": "удовлетворительно"
            }
        ]
    }
  ];


  

const backend = {    
    downloadDicts: async () => {                
        let promises = [];
        // const res = await axios.post('http://34.66.234.105:8095/auth', {username: 'org1', password: '123'})
        // return res;

        
promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/breed-type.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/color-type.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/district.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/ear-type.json')
  });
}, 150)));


promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/endoparasites.json')
  });
}, 150)));



promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/gender-type.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/gender-type.json')
  });
}, 150)));


promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/health-check.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/operating-organization.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/shelter.json')
  });
}, 150)));

promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/shelter-exit-reason.json')
  });
}, 150)));


promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/tail-type.json')
  });
}, 150)));


promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/vaccination.json')
  });
}, 150)));


promises.push(new Promise(resolve => setTimeout(() => {          
  resolve(                
      {
          status: 200,
          data: require('./mocks/wool-type.json')
  });
}, 150)));




return Promise.all(promises)



    },
    getAllAnimals: async () => {                
        return new Promise(resolve => setTimeout(() => {
            resolve(                
                {
                    status: 200,
                    data: require('./mocks/animals.json')
            });
        }, 10)); 

    },

    whoami: async () => {      
        // const res = await axios.get(`http://34.66.234.105:8095/whoami`);
        // return res;   
        console.log('whoami called')       
        return new Promise(resolve => setTimeout(() => {
            resolve(                
                {
                    status: 200,
                    data: {
                        "id": "e76d360e-b06a-454a-b0f9-bd5186c7da35",
                        "login": "shelter1",
                        "fullName": null,
                        "secret": "{SHA-256}a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
                        "level": "SHELTER",
                        "levelAccess": "8d6485f2-355c-4755-a950-8d8b02c8619e"
                    }
            });
        }, 10));        
    },
    auth: async ({username, password}) => {

        // const res = await axios.post('http://34.66.234.105:8095/auth',
        //     {
        //         username, password
        //     })
            
        // return res;
        
        return new Promise(resolve => setTimeout(() => {
            resolve(                
                {
                    status: password === '123' ? 200: 401,
                    data: {
                        "id": "e76d360e-b06a-454a-b0f9-bd5186c7da35",
                        "login": "org1",
                        "fullName": null,
                        "secret": "{SHA-256}a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
                        "level": "ORGANIZATION",
                        "levelAccess": "8d6485f2-355c-4755-a950-8d8b02c8619e"
                    }
            });
        }, 10)); 
    }
}

export {backend}