export default {
    DEBUG: process.env.DEBUG === 'true',
    APP_DB_NAME: process.env.APP_DB_NAME,
    APP_DB_USER: process.env.APP_DB_USER,
    APP_DB_PASSWORD: process.env.APP_DB_PASSWORD,
    STAGE: process.env.STAGE,
};
