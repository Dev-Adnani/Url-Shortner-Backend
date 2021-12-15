import {Router} from 'express';
import { UrlController } from '../controller/shortUrl.controller';
import validateResource from '../middleware/validate.middleware';
import shortUrlValidator from '../validator/createShortUrl.validator';

const urlrouter = Router();

urlrouter.post("/random", validateResource(shortUrlValidator), UrlController.createRandomShortUrl);

urlrouter.post("/custom", validateResource(shortUrlValidator), UrlController.createCustomShortUrl);

urlrouter.get('',UrlController.checkStatus);

urlrouter.get('/:shortId',UrlController.handleRedirect);

urlrouter.get('/api/analytics',UrlController.getAnalytics);

urlrouter.get("/api/url/:shortId", UrlController.getShortUrl);


export {urlrouter};