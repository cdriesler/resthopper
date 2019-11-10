import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolDisplay extends ResthopperComponent {

	public guid: string = "62d5ead4-53c4-4d0b-b5ce-6bd6e0850ab8";
	public name: string = "Symbol Display";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Display symbols";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}