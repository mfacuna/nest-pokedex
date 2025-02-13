import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    // No se necesita definir id: string // MongoDB lo crea automáticamente

    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);