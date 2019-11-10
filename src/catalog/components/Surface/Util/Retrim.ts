import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Retrim extends ResthopperComponent {

	public guid: string = "a1da39b7-6387-4522-bf2b-2eaee6b14072";
	public name: string = "Retrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Retrim a surface based on 3D trim data from another surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}