import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
//API Decorator, vem desabilitada e com isso ativamos ela deixando o experimentalDecorators e o emitDecoratorMetadata habilitados no tsconfig.json
import Orphanage from './Orphanage';

@Entity('images')// Com isso, falamos para o typeorm que associamos a classe com a tabela
export default class Image {
    // Não temos erros nos nomes aqui, pois o strictPropertyInitialization no tsconfig.json está false
    // Assim, podemos criar as variaveis sem nenhum valor inicial
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;
}