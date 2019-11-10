import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Compound extends ResthopperComponent {

	public guid: string = "ca80054a-cde0-4f69-a132-10502b24866d";
	public name: string = "Compound";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Compound two transformations.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}