import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CopyTrim extends ResthopperComponent {

	public guid: string = "5d192b90-1ae3-4439-bbde-b05976fc4ac3";
	public name: string = "Copy Trim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Copy UV trim data from one surface to another.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}