const graphql = require("graphql");
// const posts = require("../posts")
const _ = require('lodash');
let Poost = require("../models/postsModel")
const posts = [
  {
    "id": "1",
    "title": "His mother had always taught him",
    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    "userId": "1",
    "tags": [
    "history",
    "american",
    "crime"
    ],
    "reactions": 2
    },
    {
    "id": "2",
    "title": "He was an expert but not in a discipline",
    "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    "userId": "2",
    "tags": [
    "french",
    "fiction",
    "english"
    ],
    "reactions": 2
    },
    {
    "id": "3",
    "title": "Dave watched as the forest burned up on the hill.",
    "body": "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
    "userId": "3",
    "tags": [
    "magical",
    "history",
    "french"
    ],
    "reactions": 5
    },
    {
    "id": "4",
    "title": "All he wanted was a candy bar.",
    "body": "All he wanted was a candy bar. It didn't seem like a difficult request to comprehend, but the clerk remained frozen and didn't seem to want to honor the request. It might have had something to do with the gun pointed at his face.",
    "userId": "5",
    "tags": [
    "mystery",
    "english",
    "american"
    ],
    "reactions": 1
    },
    {
    "id": "5",
    "title": "Hopes and dreams were dashed that day.",
    "body": "Hopes and dreams were dashed that day. It should have been expected, but it still came as a shock. The warning signs had been ignored in favor of the possibility, however remote, that it could actually happen. That possibility had grown from hope to an undeniable belief it must be destiny. That was until it wasn't and the hopes and dreams came crashing down.",
    "userId": "4",
    "tags": [
    "crime",
    "mystery",
    "love"
    ],
    "reactions": 2
    },
    {
    "id": "6",
    "title": "Dave wasn't exactly sure how he had ended up",
    "body": "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    "userId": "2",
    "tags": [
    "english",
    "classic",
    "american"
    ],
    "reactions": 3
    },
]

const users = [
  {
  "id": "1",
  "firstName": "Terry",
  "lastName": "Medhurst",
  "maidenName": "Smitham",
  "age": 50,
  "gender": "male",
  "email": "atuny0@sohu.com",
  "phone": "+63 791 675 8914",
  "username": "atuny0",
  "password": "9uQFF1Lh",
  "birthDate": "2000-12-25",
  "image": "https://robohash.org/hicveldicta.png",
  "bloodGroup": "A−",
  "height": 189,
  "weight": 75.4,
  "eyeColor": "Green",
  "hair": {
  "color": "Black",
  "type": "Strands"
  },
  "domain": "slashdot.org",
  "ip": "117.29.86.254",
  "address": {
  "address": "1745 T Street Southeast",
  "city": "Washington",
  "coordinates": {
  "lat": 38.867033,
  "lng": -76.979235
  },
  "postalCode": "20020",
  "state": "DC"
  },
  "macAddress": "13:69:BA:56:A3:74",
  "university": "Capitol University",
  "bank": {
  "cardExpire": "06/22",
  "cardNumber": "50380955204220685",
  "cardType": "maestro",
  "currency": "Peso",
  "iban": "NO17 0695 2754 967"
  },
  "company": {
  "address": {
  "address": "629 Debbie Drive",
  "city": "Nashville",
  "coordinates": {
  "lat": 36.208114,
  "lng": -86.58621199999999
  },
  "postalCode": "37076",
  "state": "TN"
  },
  "department": "Marketing",
  "name": "Blanda-O'Keefe",
  "title": "Help Desk Operator"
  },
  "ein": "20-9487066",
  "ssn": "661-64-2976",
  "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
  },
  {
  "id": "2",
  "firstName": "Sheldon",
  "lastName": "Quigley",
  "maidenName": "Cole",
  "age": 28,
  "gender": "male",
  "email": "hbingley1@plala.or.jp",
  "phone": "+7 813 117 7139",
  "username": "hbingley1",
  "password": "CQutx25i8r",
  "birthDate": "2003-08-02",
  "image": "https://robohash.org/doloremquesintcorrupti.png",
  "bloodGroup": "O+",
  "height": 187,
  "weight": 74,
  "eyeColor": "Brown",
  "hair": {
  "color": "Blond",
  "type": "Curly"
  },
  "domain": "51.la",
  "ip": "253.240.20.181",
  "address": {
  "address": "6007 Applegate Lane",
  "city": "Louisville",
  "coordinates": {
  "lat": 38.1343013,
  "lng": -85.6498512
  },
  "postalCode": "40219",
  "state": "KY"
  },
  "macAddress": "13:F1:00:DA:A4:12",
  "university": "Stavropol State Technical University",
  "bank": {
  "cardExpire": "10/23",
  "cardNumber": "5355920631952404",
  "cardType": "mastercard",
  "currency": "Ruble",
  "iban": "MD63 L6YC 8YH4 QVQB XHIK MTML"
  },
  "company": {
  "address": {
  "address": "8821 West Myrtle Avenue",
  "city": "Glendale",
  "coordinates": {
  "lat": 33.5404296,
  "lng": -112.2488391
  },
  "postalCode": "85305",
  "state": "AZ"
  },
  "department": "Services",
  "name": "Aufderhar-Cronin",
  "title": "Senior Cost Accountant"
  },
  "ein": "52-5262907",
  "ssn": "447-08-9217",
  "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30"
  },
  {
  "id": "3",
  "firstName": "Terrill",
  "lastName": "Hills",
  "maidenName": "Hoeger",
  "age": 38,
  "gender": "male",
  "email": "rshawe2@51.la",
  "phone": "+63 739 292 7942",
  "username": "rshawe2",
  "password": "OWsTbMUgFc",
  "birthDate": "1992-12-30",
  "image": "https://robohash.org/consequunturautconsequatur.png",
  "bloodGroup": "A−",
  "height": 200,
  "weight": 105.3,
  "eyeColor": "Gray",
  "hair": {
  "color": "Blond",
  "type": "Very curly"
  },
  "domain": "earthlink.net",
  "ip": "205.226.160.3",
  "address": {
  "address": "560 Penstock Drive",
  "city": "Grass Valley",
  "coordinates": {
  "lat": 39.213076,
  "lng": -121.077583
  },
  "postalCode": "95945",
  "state": "CA"
  },
  "macAddress": "F2:88:58:64:F7:76",
  "university": "University of Cagayan Valley",
  "bank": {
  "cardExpire": "10/23",
  "cardNumber": "3586082982526703",
  "cardType": "jcb",
  "currency": "Peso",
  "iban": "AT24 1095 9625 1434 9703"
  },
  "company": {
  "address": {
  "address": "18 Densmore Drive",
  "city": "Essex",
  "coordinates": {
  "lat": 44.492953,
  "lng": -73.101883
  },
  "postalCode": "05452",
  "state": "VT"
  },
  "department": "Marketing",
  "name": "Lindgren LLC",
  "title": "Mechanical Systems Engineer"
  },
  "ein": "48-3951994",
  "ssn": "633-89-1926",
  "userAgent": "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0"
  },
  {
  "id": "4",
  "firstName": "Miles",
  "lastName": "Cummerata",
  "maidenName": "Maggio",
  "age": 49,
  "gender": "male",
  "email": "yraigatt3@nature.com",
  "phone": "+86 461 145 4186",
  "username": "yraigatt3",
  "password": "sRQxjPfdS",
  "birthDate": "1969-01-16",
  "image": "https://robohash.org/facilisdignissimosdolore.png",
  "bloodGroup": "B+",
  "height": 157,
  "weight": 95.9,
  "eyeColor": "Gray",
  "hair": {
  "color": "Blond",
  "type": "Very curly"
  },
  "domain": "homestead.com",
  "ip": "243.20.78.113",
  "address": {
  "address": "150 Carter Street",
  "city": "Manchester",
  "coordinates": {
  "lat": 41.76556000000001,
  "lng": -72.473091
  },
  "postalCode": "06040",
  "state": "CT"
  },
  "macAddress": "03:45:58:59:5A:7B",
  "university": "Shenyang Pharmaceutical University",
  "bank": {
  "cardExpire": "07/24",
  "cardNumber": "3580047879369323",
  "cardType": "jcb",
  "currency": "Yuan Renminbi",
  "iban": "KZ43 658B M6VS TZOU OXSO"
  },
  "company": {
  "address": {
  "address": "210 Green Road",
  "city": "Manchester",
  "coordinates": {
  "lat": 41.7909099,
  "lng": -72.51195129999999
  },
  "postalCode": "06042",
  "state": "CT"
  },
  "department": "Business Development",
  "name": "Wolff and Sons",
  "title": "Paralegal"
  },
  "ein": "71-3644334",
  "ssn": "487-28-6642",
  "userAgent": "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.17 Safari/537.11"
  }]
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;

const postType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    body: { type: GraphQLString },
    title: { type: GraphQLString },
    user: {
      type: userType,
      resolve(parent, args){
        return _.find(users, {id: parent.userId})
      }
    }
  }),
});

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields:{
    post:{
      type: postType,
      args:{id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(posts, {id: args.id})
      }
    },
    user:{
      type: userType,
      args:{id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(users, {id: args.id})
      }
    },
    posts:{
      type: new GraphQLList(postType),
      
      resolve(parent, args){
        return posts
      }
    },
    users:{
      type: new GraphQLList(userType),
      
      resolve(parent, args){
        return users
      }
    },
  }
});


const Mutation = new GraphQLObjectType({
  name:"Mutation",
  fields:{
    addPost:{
      type: postType,
      args:{
        body: {type: GraphQLString},
        likes: {type: GraphQLList},

      },
      resolve(parent, args){
        let post = new Poost({
          body: args.body,
          likes:[]
        })
        return post.save()
      }
    },
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
