import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolAdvanced extends ResthopperComponent {

	public guid: string = "e5c82975-8011-412c-b56d-bb7fc9e7f28d";
	public name: string = "Symbol (Advanced)";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Advanced symbol display properties";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}