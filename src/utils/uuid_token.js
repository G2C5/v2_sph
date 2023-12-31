import { v4 as uuidv4 } from 'uuid'

export const getUUID = () => {
    // 每一次使用生成一个唯一身份 UUIDTOKEN：uuid_token
    let uuid_token = localStorage.getItem('UUIDTOKEN');
    if (!uuid_token) {
        uuid_token = uuidv4(); // 没有游客零时身份，就生成并本地存储
        localStorage.setItem('UUIDTOKEN', uuid_token);
    }
    return uuid_token;
}