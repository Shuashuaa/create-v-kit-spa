import router from './router';
const routerBase = router.options.base;

export const base = routerBase == undefined ? '/' : '/ProjectName/'; // to be automated

// usage
// note: mainly used for multiple routes like /products/items/2 since api read it as items/2
// import { base } from '@/path.js'
// const response = await axios.get(`${base}api/getJobs`)