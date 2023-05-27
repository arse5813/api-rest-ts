import { Router } from "express";
import { readdirSync } from "fs"


const PATH_ROUTER = `${__dirname}`;
const router = Router();


const clearFileName = (fileName:string) => {
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((filename)=>{

    const clearName = clearFileName(filename);
    if(clearName !== "index"){
        import(`./${clearName}`).then((moduleRouter)=>{
            console.log(`Se esta cargando la ruta .../${clearName}`);
            router.use(`/${clearName}`, moduleRouter.router);
        });
    }
    
});


export { router };

