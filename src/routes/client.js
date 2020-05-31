import axios from 'axios';
import { aws4Interceptor } from "aws4-axios";

const URL = 'https://sxgtr83iji.execute-api.us-east-1.amazonaws.com/dev';

const client = axios.create();

const interceptor = aws4Interceptor({
  region: "us-east-1",
  service: "execute-api"
}, {
  accessKeyId: 'AKIARYCHBYC7OXNRBCOE',
  secretAccessKey: '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'
});

client.interceptors.request.use(interceptor);

export default client;