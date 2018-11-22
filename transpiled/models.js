"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Building = /** @class */ (function () {
    function Building(floors, height, name) {
        this.floors = floors;
        this.height = height;
        this.name = name;
        this.floors = floors;
        this.height = height;
        this.name = name;
    }
    return Building;
}());
exports.Building = Building;
var Villa = /** @class */ (function (_super) {
    __extends(Villa, _super);
    function Villa(rooms, gardenArea, floors, height, name) {
        var _this = _super.call(this, floors, height, name) || this;
        _this.rooms = rooms;
        _this.gardenArea = gardenArea;
        _this.floors = floors;
        _this.height = height;
        _this.name = name;
        _this.gardenArea = gardenArea;
        _this.rooms = rooms;
        return _this;
    }
    Villa.prototype.addRoom = function () {
        this.rooms++;
    };
    return Villa;
}(Building));
exports.Villa = Villa;
exports.someProp = "test";
