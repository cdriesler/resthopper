import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Orthocentre extends ResthopperComponent {

	public guid: string = "36dd5551-b6bd-4246-bd2f-1fd91eb2f02d";
	public name: string = "Orthocentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle orthocentre from altitudes.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}