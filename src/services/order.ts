import ItemModel from '../models/item';

const getOrder = async () => {

    const responseItem = await ItemModel.find({});
    return responseItem;
}

export { getOrder };