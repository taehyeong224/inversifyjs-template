import { injectable } from "inversify";
import { AbstractDao } from "./base/AbstractDao";
import { Test } from "../entity/Test";

@injectable()
export class TestDao extends AbstractDao<Test> {

    constructor() {
        super(Test);
    }

    public select(objectIdx: number): Promise<Test> {
        throw new Error("Method not implemented.");
    }

    public findOneById(objectId: number): Promise<Test> {
        return this.repo.createQueryBuilder("Test")
            .where("Test.isDeleted = false")
            .andWhere("Test.idx = :idx", { idx: objectId })
            .getOne();
    }

    public findAll(): Promise<Test[]> {
        return undefined;
    }

    public async insert(object: Test): Promise<Test> {
        return this.repo.save(object);
    }

    public update(object: Test): Promise<Test> {
        return this.repo.save(object);
    }

    public async delete(object: Test): Promise<void> {
        await this.repo.save(object);
    }
}