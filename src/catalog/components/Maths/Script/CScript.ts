import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CScript extends ResthopperComponent {

	public guid: string = "a9a8ebd2-fff5-4c44-a8f5-739736d129ba";
	public name: string = "C# Script";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A C#.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

}