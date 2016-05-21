package ru.marksokolov;

import java.io.IOException;

public class Main {
	
	public static void main(String args[]) throws IOException{
		Work work=new Work();
		work.input();
		work.writeFile("input.txt");
		work.readFile("input.txt");
	}

}
