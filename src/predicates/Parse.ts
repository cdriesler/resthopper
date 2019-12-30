import ResthopperComponent from "./../models/ResthopperComponent";
import ResthopperParameter from "./../models/ResthopperParameter";
import ResthopperSchema from "./../models/ResthopperSchema";

interface ComputeObject {
    Guid: string;
    Name: string;
    NickName: string;
    Description: string;
    Category: string;
    Subcategory: string;
    IsObsolete: boolean;
    IsVariable: boolean;
    Inputs: ComputeObjectParam[];
    Outputs: ComputeObjectParam[];
    LibraryName: string;
}

interface ComputeObjectParam {
    Name: string;
    NickName: string;
    Description: string;
    IsOptional: boolean;
    TypeName: string;
}

export default class Parse {

    public static ComputeObjectAsResthopperComponent(object: any): ResthopperComponent {
        const obj = object as ComputeObject;
        
        let rc = new ResthopperComponent();
        rc.guid = obj.Guid;
        rc.name = obj.Name;
        rc.nickName = obj.NickName.replace(/\W/g, '');
        rc.description = obj.Description;
        rc.category = obj.Category;
        rc.subCategory = obj.Subcategory;
        rc.isObsolete = obj.IsObsolete;
        rc.isVariable = obj.IsVariable;
        rc.libraryName = obj.LibraryName;

        (<any[]>object.Inputs).forEach(x => {
            const p = this.ComputeObjectParamAsResthopperParam(x);
            rc.input[p.nickName] = p;
        });

        (<any[]>object.Outputs).forEach(x => {
            const p = this.ComputeObjectParamAsResthopperParam(x);
            rc.output[p.nickName] = p;
        });

        return rc;
    }

    public static ComputeObjectParamAsResthopperParam(object: any): ResthopperParameter {
        const p = object as ComputeObjectParam;

        let rp = new ResthopperParameter();
        rp.name = p.Name.replace(/\W/g, '');
        rp.nickName = p.NickName.replace(/\W/g, '');
        rp.description = p.Description.replace(/\r/g, "").replace(/\n/g, "");
        rp.isOptional = p.IsOptional;
        rp.typeName = p.TypeName;

        return rp;
    }

    public static ResthopperComponentAsResthopperParam(component: ResthopperComponent): ResthopperParameter {
        let p = new ResthopperParameter();

        p.guid = component.guid;
        p.isOptional = false;
        p.name = component.name.replace(/\W/g, '');
        p.nickName = component.nickName.replace(/\W/g, '');
        p.description = component.description;

        return p;
    }

    public static ResthopperSchemaAsOutputValue(schema: ResthopperSchema): any {
        return schema.values[0].InnerTree['{ 0; }'][0].data;
    }
}