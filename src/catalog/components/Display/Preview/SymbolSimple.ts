import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolSimple extends ResthopperComponent {

	public guid: string = "79747717-1874-4c34-b790-faef53b50569";
	public name: string = "Symbol (Simple)";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Simple symbol display properties";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}