import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RemapNumbers extends ResthopperComponent {

	public guid: string = "2fcc2743-8339-4cdf-a046-a1f17439191d";
	public name: string = "Remap Numbers";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Remap numbers into a new numeric domain";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}