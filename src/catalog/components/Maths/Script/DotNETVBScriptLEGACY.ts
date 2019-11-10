import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DotNETVBScriptLEGACY extends ResthopperComponent {

	public guid: string = "fb6aba99-fead-4e42-b5d8-c6de5ff90ea6";
	public name: string = "DotNET VB Script (LEGACY)";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A VB.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

}