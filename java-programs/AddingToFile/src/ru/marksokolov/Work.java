package ru.marksokolov;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Work {
	int num,num2,sum;
	String a,b;
	public void input(){
		Scanner scan=new Scanner(System.in);
		System.out.print("¬ведите первое число: ");
		a=scan.nextLine();
		System.out.print("¬ведите второе число: ");
		b=scan.nextLine();
	}
	
	public void writeFile(String name){
		try {
			FileWriter fw=new FileWriter(name);
			fw.append(a+" ");
			fw.append(b);
			fw.close();
		} catch (IOException e) {
			System.out.println("Error!");
			e.printStackTrace();
		}
	}
	
	public void readFile(String name) throws IOException{
		try {
			FileReader fr=new FileReader(name);
			BufferedReader bf=new BufferedReader(fr);
			String str=bf.readLine();
			if(str.contains(" ")){
				int n=str.indexOf(" ");
				String s1=str.substring(0, n);
				num=Integer.valueOf(s1);
				String s2=str.substring(n+1, str.length());
				num2=Integer.valueOf(s2);
			}
			sum=num+num2;
			FileWriter fw=new FileWriter("output.txt");
			String st=String.valueOf(sum);
			fw.append(st);
			fw.close();
			System.out.println("–езультат сложение записан в файл output.txt!");
		} catch (FileNotFoundException e) {
			System.out.println("Error!");
			e.printStackTrace();
		}
	}

}
