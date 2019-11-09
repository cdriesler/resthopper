import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Substrate extends ResthopperComponent {

	public guid: string = "415750fd-c0ec-4411-84d0-01f28ab23066";
	public name: string = "Substrate";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Substrate algorithm inspired by Jared Tarbell (Complexification.net)";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}