import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DomainBox extends ResthopperComponent {

	public guid: string = "79aa7f47-397c-4d3f-9761-aaf421bb7f5f";
	public name: string = "Domain Box";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by a base plane and size domains.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}