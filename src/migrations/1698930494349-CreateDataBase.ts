import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDataBase1698930494349 implements MigrationInterface {
    name = 'CreateDataBase1698930494349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "deleteAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "deletedAt" date`);
        await queryRunner.query(`ALTER TABLE "RealEstates" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "RealEstates" ALTER COLUMN "value" TYPE numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "deleteAt" date`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updateAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createAt" date NOT NULL DEFAULT now()`);
    }

}
