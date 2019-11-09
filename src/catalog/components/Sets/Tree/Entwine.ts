import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Entwine extends ResthopperComponent {

	public guid: string = "c9785b8e-2f30-4f90-8ee3-cca710f82402";
	public name: string = "Entwine";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flatten and combine a collection of data streams";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}