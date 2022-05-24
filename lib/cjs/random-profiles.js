"use strict";
const data = require('./profile-data.json');
const getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const generateSingleProfile = (theme) => {
    const sex = data['sex'][getRandomInt(data['sex'].length)];
    const firstName = sex === 'male'
        ? data['firstNamesMale'][getRandomInt(data['firstNamesMale'].length)]
        : data['firstNamesFemale'][getRandomInt(data['firstNamesFemale'].length)];
    const lastName = data['themes'][theme]['lastNames'][getRandomInt(data['themes'][theme]['lastNames'].length)];
    const age = getRandomInt(data['themes'][theme]['minAge'], data['themes'][theme]['maxAge']);
    const job = data['themes'][theme]['jobs'][getRandomInt(data['themes'][theme]['jobs'].length)];
    return { firstName, lastName, sex, age, job };
};
const generateProfiles = (theme, numberOfProfiles) => {
    const profiles = [];
    for (let i = 0; i < numberOfProfiles; i++) {
        profiles.push(generateSingleProfile(theme));
    }
    return profiles;
};
const getThemeNames = () => {
    return Object.keys(data['themes']);
};
exports.generateProfiles = generateProfiles;
exports.getThemeNames = getThemeNames;
// console.log(module)
// console.log(generateProfiles('Middle Ages', 3))