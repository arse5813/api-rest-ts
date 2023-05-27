import { Request, Response } from 'express';
import { handleHttp } from '../util/error.handle';
import { interTramo, getTramo, getTramos, updateTramo, deleteTramo } from '../services/remolque';

const getItem = async ({params}:Request, res:Response) => {
    try {
        const { id } = params;
        const response = await getTramo(id);
        const data = response ? response : "NOT_FOUND"
        res.send(data);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
};

const getItems = async (rq:Request, res:Response) => {
    try {
        const response = await getTramos();
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
};

const updateItem = async ({params, body }:Request, res:Response) => {
    try {
        const { id } = params;
        const response = await updateTramo( id, body );
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEM");
    }
};

const postItem = async ({ body }:Request, res:Response) => {
    try {
        const responseTramo = await interTramo(body);
        res.send(responseTramo);
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM");
    }
};

const deleteItem = async({params}:Request, res:Response) => {
    try {
        const { id } = params;
        const response = await deleteTramo( id );
        res.send(response)
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
};

export { getItems, getItem, postItem, updateItem, deleteItem };

