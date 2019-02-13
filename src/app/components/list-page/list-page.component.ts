import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import * as localStorage from 'nativescript-localstorage';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';

declare let myGlobal: any

@Component({
    selector: "ListPage",
    moduleId: module.id,
    templateUrl: "./list-page.component.html",
})

export class ListPageComponent implements OnInit {
   public selectedArray: Array<any> = [];
   public useArray: Array<any> = [];
   private playerArray = [
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 3, name: "Piqué", role: "Defender", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 4, name: "I. Rakitic", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 5, name: "Sergio", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 6, name: "Denis Suárez", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 7, name: "Arda", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 8, name: "A. Iniesta", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 9, name: "Suárez", role: "Forward", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 10, name: "Messi", role: "Forward", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 11, name: "Neymar", role: "Forward", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 12, name: "Rafinha", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 13, name: "Cillessen", role: "Goalkeeper", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 14, name: "Mascherano", role: "Defender", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 17, name: "Paco Alcácer", role: "Forward", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 18, name: "Jordi Alba", role: "Defender", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 19, name: "Digne", role: "Defender", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 21, name: "André Gomes", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 23, name: "Umtiti", role: "Defender", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 24, name: "Mathieu", role: "Defender", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] },
        { id: 25, name: "Masip", role: "Goalkeeper", otherSuff: ['hello', 'there', 'this is just some stuff to add to the array. and here is some randome letters: adaagaf afafaf af dfssagsaghinsa faf asfaterad aff sgsdfarerarada wg agd gsdsadsagds we gsggsdwgetw vsgsdgsgsg sg sgsg sgewfwfwafsfsgsgsgeestwetwevfwfwfwf w fsf sf sf sfsdfwerwetwgwwewegwefaadadgadagef'] }
       ]

    constructor(private router: Router, private routerExtensions: RouterExtensions, public page: Page) {

    }

    ngOnInit(): void {
        console.log('now on list page. hopefully this uses some memory')
        this.useArray = this.playerArray
    } 

    clickName(person){
       this.selectedArray.push(person)
       this.selectedArray.push(person)
       this.selectedArray.push(person)
       localStorage.setItem('selectedPeople', JSON.stringify(this.selectedArray))
    }

    homePage(){
        this.routerExtensions.navigate(["home"], {clearHistory: true})
    }

    showSavedItems(){
        this.router.navigate(["stored-items"])
    }
 }