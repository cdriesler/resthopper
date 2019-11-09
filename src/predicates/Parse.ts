import ResthopperComponent from "./../models/ResthopperComponent";
import ResthopperParameter from "./../models/ResthopperParameter";

interface ComputeObject {
    Guid: string;
    Name: string;
    NickName: string;
    Description: string;
    Category: string;
    Subcategory: string;
    IsObsolete: boolean;
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
        rc.nickName = obj.NickName;
        rc.description = obj.Description;
        rc.category = obj.Category;
        rc.subCategory = obj.Subcategory;
        rc.isObsolete = obj.IsObsolete;
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
        rp.name = p.Name;
        rp.nickName = p.NickName;
        rp.description = p.Description;
        rp.isOptional = p.IsOptional;
        rp.typeName = p.TypeName;

        return rp;
    }

    public static ResthopperComponentAsResthopperParam(component: ResthopperComponent): ResthopperParameter {
        let p = new ResthopperParameter();

        p.guid = component.guid;
        p.isOptional = false;
        p.name = component.name;
        p.nickName = component.nickName;
        p.description = component.description;

        return p;
    }
}