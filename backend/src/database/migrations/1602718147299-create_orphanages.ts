import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602718147299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Esse metodo irá realizar alterações
        // CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO

        // É assim que criamos nossa primeira tabela por um metodo da migration
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true, //Será gerada automaticamente
                    generationStrategy: 'increment', //A cada novo item, irá somar automaticamente no id
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                }, 
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Esse metodo irá desfazer o que foi feito no metodo up. E é assim que deve ser nas Migrations
        await queryRunner.dropTable('orphanages');
    }

}
