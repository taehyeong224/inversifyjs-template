import { inject, injectable } from 'inversify';
import TYPES from "../constant/types";
import { TestDao } from '../Dao/TestDao';
import { Test } from '../entity/Test';

@injectable()
export class TestService {

    @inject(TYPES.TestDao) private testDao: TestDao;


    public async getTestByIdx(idx: number): Promise<Test> {
        return this.testDao.findOneById(idx);
    }
}
