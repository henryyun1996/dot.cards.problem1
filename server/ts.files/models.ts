import { Model, Table, Column, PrimaryKey, DataType, AutoIncrement, Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    database: 'collection',
    username: 'henrysungyun',
    password: 'testpassword123',
    host: 'localhost',
    dialect: 'sqlite',
    storage: './dot.cards.problem1.db.sqlite',
    models: [__dirname + '/models'],
});

@Table({ tableName: 'collection' })
class Collection extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.DATE)
    createdAt!: Date;

    @Column(DataType.DATE)
    updatedAt!: Date;
}

sequelize.addModels([Collection]);

export { Collection }