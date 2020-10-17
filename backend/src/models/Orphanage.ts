import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
//API Decorator, vem desabilitada e com isso ativamos ela deixando o experimentalDecorators e o emitDecoratorMetadata habilitados no tsconfig.json
import Image from './Image';

@Entity('orphanages')// Com isso, falamos para o typeorm que associamos a classe com a tabela
export default class Orphanage {
    // Não temos erros nos nomes aqui, pois o strictPropertyInitialization no tsconfig.json está false
    // Assim, podemos criar as variaveis sem nenhum valor inicial
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string; 
    
    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}