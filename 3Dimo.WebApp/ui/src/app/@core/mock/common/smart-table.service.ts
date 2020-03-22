/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { Injectable } from '@angular/core';
import { SmartTableData } from '../../interfaces/common/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    login: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    login: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    login: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    login: '@snow',
    email: 'snow@gmail.com',
    age: '20',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    login: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    login: '@ann',
    email: 'ann@gmail.com',
    age: '21',
  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    login: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    login: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    login: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    login: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    login: '@mark',
    email: 'mark@gmail.com',
    age: '38',
  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    login: '@jacob',
    email: 'jacob@yandex.ru',
    age: '48',
  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    login: '@haik',
    email: 'haik@outlook.com',
    age: '48',
  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    login: '@garegin',
    email: 'garegin@gmail.com',
    age: '40',
  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    login: '@krikor',
    email: 'krikor@yandex.ru',
    age: '32',
  }, {
    'id': 16,
    'firstName': 'Francisca',
    'lastName': 'Brady',
    'login': '@Gibson',
    'email': 'franciscagibson@comtours.com',
    'age': 11,
  }, {
    'id': 17,
    'firstName': 'Tillman',
    'lastName': 'Figueroa',
    'login': '@Snow',
    'email': 'tillmansnow@comtours.com',
    'age': 34,
  }, {
    'id': 18,
    'firstName': 'Jimenez',
    'lastName': 'Morris',
    'login': '@Bryant',
    'email': 'jimenezbryant@comtours.com',
    'age': 45,
  }, {
    'id': 19,
    'firstName': 'Sandoval',
    'lastName': 'Jacobson',
    'login': '@Mcbride',
    'email': 'sandovalmcbride@comtours.com',
    'age': 32,
  }, {
    'id': 20,
    'firstName': 'Griffin',
    'lastName': 'Torres',
    'login': '@Charles',
    'email': 'griffincharles@comtours.com',
    'age': 19,
  }, {
    'id': 21,
    'firstName': 'Cora',
    'lastName': 'Parker',
    'login': '@Caldwell',
    'email': 'coracaldwell@comtours.com',
    'age': 27,
  }, {
    'id': 22,
    'firstName': 'Cindy',
    'lastName': 'Bond',
    'login': '@Velez',
    'email': 'cindyvelez@comtours.com',
    'age': 24,
  }, {
    'id': 23,
    'firstName': 'Frieda',
    'lastName': 'Tyson',
    'login': '@Craig',
    'email': 'friedacraig@comtours.com',
    'age': 45,
  }, {
    'id': 24,
    'firstName': 'Cote',
    'lastName': 'Holcomb',
    'login': '@Rowe',
    'email': 'coterowe@comtours.com',
    'age': 20,
  }, {
    'id': 25,
    'firstName': 'Trujillo',
    'lastName': 'Mejia',
    'login': '@Valenzuela',
    'email': 'trujillovalenzuela@comtours.com',
    'age': 16,
  }, {
    'id': 26,
    'firstName': 'Pruitt',
    'lastName': 'Shepard',
    'login': '@Sloan',
    'email': 'pruittsloan@comtours.com',
    'age': 44,
  }, {
    'id': 27,
    'firstName': 'Sutton',
    'lastName': 'Ortega',
    'login': '@Black',
    'email': 'suttonblack@comtours.com',
    'age': 42,
  }, {
    'id': 28,
    'firstName': 'Marion',
    'lastName': 'Heath',
    'login': '@Espinoza',
    'email': 'marionespinoza@comtours.com',
    'age': 47,
  }, {
    'id': 29,
    'firstName': 'Newman',
    'lastName': 'Hicks',
    'login': '@Keith',
    'email': 'newmankeith@comtours.com',
    'age': 15,
  }, {
    'id': 30,
    'firstName': 'Boyle',
    'lastName': 'Larson',
    'login': '@Summers',
    'email': 'boylesummers@comtours.com',
    'age': 32,
  }, {
    'id': 31,
    'firstName': 'Haynes',
    'lastName': 'Vinson',
    'login': '@Mckenzie',
    'email': 'haynesmckenzie@comtours.com',
    'age': 15,
  }, {
    'id': 32,
    'firstName': 'Miller',
    'lastName': 'Acosta',
    'login': '@Young',
    'email': 'milleryoung@comtours.com',
    'age': 55,
  }, {
    'id': 33,
    'firstName': 'Johnston',
    'lastName': 'Brown',
    'login': '@Knight',
    'email': 'johnstonknight@comtours.com',
    'age': 29,
  }, {
    'id': 34,
    'firstName': 'Lena',
    'lastName': 'Pitts',
    'login': '@Forbes',
    'email': 'lenaforbes@comtours.com',
    'age': 25,
  }, {
    'id': 35,
    'firstName': 'Terrie',
    'lastName': 'Kennedy',
    'login': '@Branch',
    'email': 'terriebranch@comtours.com',
    'age': 37,
  }, {
    'id': 36,
    'firstName': 'Louise',
    'lastName': 'Aguirre',
    'login': '@Kirby',
    'email': 'louisekirby@comtours.com',
    'age': 44,
  }, {
    'id': 37,
    'firstName': 'David',
    'lastName': 'Patton',
    'login': '@Sanders',
    'email': 'davidsanders@comtours.com',
    'age': 26,
  }, {
    'id': 38,
    'firstName': 'Holden',
    'lastName': 'Barlow',
    'login': '@Mckinney',
    'email': 'holdenmckinney@comtours.com',
    'age': 11,
  }, {
    'id': 39,
    'firstName': 'Baker',
    'lastName': 'Rivera',
    'login': '@Montoya',
    'email': 'bakermontoya@comtours.com',
    'age': 47,
  }, {
    'id': 40,
    'firstName': 'Belinda',
    'lastName': 'Lloyd',
    'login': '@Calderon',
    'email': 'belindacalderon@comtours.com',
    'age': 21,
  }, {
    'id': 41,
    'firstName': 'Pearson',
    'lastName': 'Patrick',
    'login': '@Clements',
    'email': 'pearsonclements@comtours.com',
    'age': 42,
  }, {
    'id': 42,
    'firstName': 'Alyce',
    'lastName': 'Mckee',
    'login': '@Daugherty',
    'email': 'alycedaugherty@comtours.com',
    'age': 55,
  }, {
    'id': 43,
    'firstName': 'Valencia',
    'lastName': 'Spence',
    'login': '@Olsen',
    'email': 'valenciaolsen@comtours.com',
    'age': 20,
  }, {
    'id': 44,
    'firstName': 'Leach',
    'lastName': 'Holcomb',
    'login': '@Humphrey',
    'email': 'leachhumphrey@comtours.com',
    'age': 28,
  }, {
    'id': 45,
    'firstName': 'Moss',
    'lastName': 'Baxter',
    'login': '@Fitzpatrick',
    'email': 'mossfitzpatrick@comtours.com',
    'age': 51,
  }, {
    'id': 46,
    'firstName': 'Jeanne',
    'lastName': 'Cooke',
    'login': '@Ward',
    'email': 'jeanneward@comtours.com',
    'age': 59,
  }, {
    'id': 47,
    'firstName': 'Wilma',
    'lastName': 'Briggs',
    'login': '@Kidd',
    'email': 'wilmakidd@comtours.com',
    'age': 53,
  }, {
    'id': 48,
    'firstName': 'Beatrice',
    'lastName': 'Perry',
    'login': '@Gilbert',
    'email': 'beatricegilbert@comtours.com',
    'age': 39,
  }, {
    'id': 49,
    'firstName': 'Whitaker',
    'lastName': 'Hyde',
    'login': '@Mcdonald',
    'email': 'whitakermcdonald@comtours.com',
    'age': 35,
  }, {
    'id': 50,
    'firstName': 'Rebekah',
    'lastName': 'Duran',
    'login': '@Gross',
    'email': 'rebekahgross@comtours.com',
    'age': 40,
  }, {
    'id': 51,
    'firstName': 'Earline',
    'lastName': 'Mayer',
    'login': '@Woodward',
    'email': 'earlinewoodward@comtours.com',
    'age': 52,
  }, {
    'id': 52,
    'firstName': 'Moran',
    'lastName': 'Baxter',
    'login': '@Johns',
    'email': 'moranjohns@comtours.com',
    'age': 20,
  }, {
    'id': 53,
    'firstName': 'Nanette',
    'lastName': 'Hubbard',
    'login': '@Cooke',
    'email': 'nanettecooke@comtours.com',
    'age': 55,
  }, {
    'id': 54,
    'firstName': 'Dalton',
    'lastName': 'Walker',
    'login': '@Hendricks',
    'email': 'daltonhendricks@comtours.com',
    'age': 25,
  }, {
    'id': 55,
    'firstName': 'Bennett',
    'lastName': 'Blake',
    'login': '@Pena',
    'email': 'bennettpena@comtours.com',
    'age': 13,
  }, {
    'id': 56,
    'firstName': 'Kellie',
    'lastName': 'Horton',
    'login': '@Weiss',
    'email': 'kellieweiss@comtours.com',
    'age': 48,
  }, {
    'id': 57,
    'firstName': 'Hobbs',
    'lastName': 'Talley',
    'login': '@Sanford',
    'email': 'hobbssanford@comtours.com',
    'age': 28,
  }, {
    'id': 58,
    'firstName': 'Mcguire',
    'lastName': 'Donaldson',
    'login': '@Roman',
    'email': 'mcguireroman@comtours.com',
    'age': 38,
  }, {
    'id': 59,
    'firstName': 'Rodriquez',
    'lastName': 'Saunders',
    'login': '@Harper',
    'email': 'rodriquezharper@comtours.com',
    'age': 20,
  }, {
    'id': 60,
    'firstName': 'Lou',
    'lastName': 'Conner',
    'login': '@Sanchez',
    'email': 'lousanchez@comtours.com',
    'age': 16,
  }];

  getData() {
    return this.data;
  }
}
