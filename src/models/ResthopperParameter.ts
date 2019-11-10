import { newGuid } from './../utils/Guid';

export default class ResthopperParameter {
    
    public guid: string = "";
    public instanceGuid: string = newGuid();
    public name: string = "";
    public nickName: string = "";
    public description: string = "";
    public isOptional: boolean = false;
    public typeName: string = "";

    public isUserInput: boolean = false;
    public isUserOutput: boolean = false;

    public sources: string[] = [];
    public values: string[] | number[] | boolean[] = [];

    public getUniqueName(): string {
        return `${this.toCamelCase(this.name.replace(" ", ""))}_${this.toCamelCase(this.nickName.replace(" ", ""))}`;
    }

    private toCamelCase(str: string){
        return str.split(' ').map(function(word,index){
          // If it is the first word make sure to lowercase all the chars.
          if(index == 0){
            return word.toLowerCase();
          }
          // If it is not the first word only upper case the first char and lowercase the rest.
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
      }

    public getSource(): string | undefined {
        return this.sources[0];
    }

    public setSource(source: string | ResthopperParameter ): void {
        if (typeof(source) == 'string') {
            this.sources = [source];
        }
        else {
            this.sources = [source.instanceGuid];
        }
    }

    public getValue(): any {
        return this.values[0];
    }

    private assertNumber(values: any[]): asserts values is number[] {
        values.forEach(x => {
            if (typeof(x) != 'number') {
                throw new Error("Parameter value is not a number.");
            }
        })
    }

    public getNumberValues(): number[] {
        this.assertNumber(this.values);
        return this.values;
    }

    public tryGetNumberValues(): number[] | undefined {
        this.values.forEach((x:any) => {
            if (typeof(x) != 'number') {
                return undefined;
            }
        });

        this.assertNumber(this.values);

        return this.values;
    }

}