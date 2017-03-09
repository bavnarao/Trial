/// <reference path="../jquery.d.ts"/>

import {Component} from "@angular/core";
import {MaterialService} from "./material.service";
import {Material} from "./material";
import {Http} from "@angular/http";
//import {AgGridNg2} from 'ag-grid-ng2/main';

@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: "./dashboardView.html",
    providers: [MaterialService]
})
export class DashboardComponent {
    materials: Material[];
    errorMessage: string;
    searchText: string = "";
    orderby : string="";
    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
    constructor(private service: MaterialService, private http: Http) {
        //this.materials = new Array<Material>();
    }
    sorting: any = {
    column: 'Name', //to match the variable of one of the columns
    descending: false
  };
    ngOnInit() {
        this.service.getMaterials().subscribe(
           data => this.materials = data,
            error => this.errorMessage = <any>error
        );

        this.service.getMaterials().subscribe(
          data => this.promise(data),
           error => this.errorMessage = <any>error
      )
        
        $("#imagesList").show();
        $("#jobsTable").show();
        $("#recentDocTitle").show();

        



    }
    showFilter() {
        $('#myInput').show();
    }

   promise(data: Material[]) {
    
    for (var index = 0; index < data.length; index++) {
        let widthV:any = data[index].toq;
       
       $('.bar')[index].style.width = widthV+"%";
      if(data[index].status == "Error") {
          $('.slb-progress-indicator')[index].className = "slb-progress-indicator warning";
           $('.bar')[index].style.width = "100%";
      } else {
          $('.slb-progress-indicator')[index].className = "slb-progress-indicator positive"
      }
       
        
    }
    
}

    onKill() {
       
    }

    getlist() {
        this.service.getMaterials().subscribe(
          data => this.promise(data),
           error => this.errorMessage = <any>error
      )

        document.getElementById("contentTitle").innerHTML = "Job List";
        $('#menu4').hide();
        $('#menu5').hide();
        $("#imagesList").hide();
        $("#jobsTable").show();
        $('a').removeClass('selected');
        $("#joblst").addClass("framework-nav-item selected");
        $("#recentDocTitle").hide();


    }
    getimageData(evt: any) {
        evt = event.currentTarget;
        let abc = evt.offsetParent.innerText;
        alert(abc);
    }
    getdashboard() {
        document.getElementById("contentTitle").innerHTML = "My Dashboard";
        this.service.getMaterials().subscribe(
            data => this.promise(data),
            error => this.errorMessage = <any>error
        );
        $("#imagesList").show();
        $("#jobsTable").show();
        $("NAV > a").addClass("framework-nav-item");
        $('a').removeClass('selected');
        $("#dashboard").addClass("framework-nav-item selected");
        $('#menu4').hide();
        $('#menu5').hide();
        $('#menu3').hide();
        $("#recentDocTitle").show();

    }
    getdrive() {
        document.getElementById("contentTitle").innerHTML = "Seismic Drive";
        $("#imagesList").hide();
        $("#jobsTable").hide();
        $('#menu4').hide();
        $('#menu5').hide();
        $('#menu3').show();
        $('#menu3').addClass("tab-pane fade in active");
        $('a').removeClass('selected');
        $("#seismicDrive").addClass("framework-nav-item selected");
        $("#recentDocTitle").hide();
    }
    getflow() {
        document.getElementById("contentTitle").innerHTML = "Flow Designer";
        $('a').removeClass('selected');
        $("#flowDesign").addClass("framework-nav-item selected");
        $("#imagesList").show();
        $("#jobsTable").hide();
        $('#menu4').hide();
        $('#menu3').hide();
        $('#menu5').hide();
        $("#recentDocTitle").show();
    }
    getview() {

        this.http.get("/app/dashboard/data2.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 2000);
            });

        $('a').removeClass('selected');
        $("#viewer").addClass("framework-nav-item selected");
        $("#imagesList").hide();
        $('#menu5').show();
        $("#jobsTable").hide();
        $('#menu3').hide();
        $('#menu4').hide();
        $('#menu5').addClass("tab-pane fade in active");
        document.getElementById("contentTitle").innerHTML = "Viewer";
        $("#recentDocTitle").hide();

    }




    
    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    public remove(item:any) {
        let index = this.materials.indexOf(item);
        if(index>-1) {
            this.materials.splice(index, 1);
        }
    }

    public view(item:any) {
          alert(" The details are Flow Name : "+ item.mname +"  and Submitted By : "+ item.uom);
    }

}