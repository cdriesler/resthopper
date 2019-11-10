import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsPlanar extends ResthopperComponent {

	public guid: string = "d4bc9653-c770-4bee-a31d-d120cbb75b39";
	public name: string = "Is Planar";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a surface is planar";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}