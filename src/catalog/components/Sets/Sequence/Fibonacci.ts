import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Fibonacci extends ResthopperComponent {

	public guid: string = "fe99f302-3d0d-4389-8494-bd53f7935a02";
	public name: string = "Fibonacci";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Creates a Fibonacci sequence.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"SeedA_A": FibonacciInput_SeedA_A,
		"SeedB_B": FibonacciInput_SeedB_B,
		"Number_N": FibonacciInput_Number_N,
	}

	public output:
	{
		"Series_S": FibonacciOutput_Series_S,
	}

	constructor() {
		super();
		this.input = {
			"SeedA_A": new FibonacciInput_SeedA_A(),
			"SeedB_B": new FibonacciInput_SeedB_B(),
			"Number_N": new FibonacciInput_Number_N(),
		}
		this.output = {
			"Series_S": new FibonacciOutput_Series_S(),
		}
	}

}

class FibonacciInput_SeedA_A extends ResthopperParameter {

	public name: string = "SeedA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FibonacciInput_SeedB_B extends ResthopperParameter {

	public name: string = "SeedB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FibonacciInput_Number_N extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FibonacciOutput_Series_S extends ResthopperParameter {

	public name: string = "Series";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
