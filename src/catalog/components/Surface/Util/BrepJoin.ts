import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepJoin extends ResthopperComponent {

	public guid: string = "1addcc85-b04e-46e6-bd4a-6f6c93bf7efd";
	public name: string = "Brep Join";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Join a number of Breps together";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}