// Http Communication Get, post, put , delete...
// axios library
import axios from 'axios';
 const getRoute = {
    'installAPi' : "http://runbook-service"
}
export const useApi = (method, routename)=> {
    axios[method](routename)
}