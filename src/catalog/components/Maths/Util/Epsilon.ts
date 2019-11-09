import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Epsilon extends ResthopperComponent {

	public guid: string = "deadf87d-99a6-4980-90c3-f98350aa6f0f";
	public name: string = "Epsilon";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of double precision floating point epsilon.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}