// Generated with Ajv 8.20.0 from menu.schema.json.
"use strict";
export const validate = validate10;
export default validate10;
const schema11 = {"type":"object","additionalProperties":false,"required":["name","priceCents","opens","closes"],"properties":{"name":{"type":"string","pattern":"[\\s\\S]"},"priceCents":{"type":"integer","minimum":0},"opens":{"type":"string","pattern":"^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"},"closes":{"type":"string","pattern":"^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"}}};
const pattern0 = new RegExp("[\\s\\S]", "u");
const pattern1 = new RegExp("^(?:[01][0-9]|2[0-3]):[0-5][0-9]$", "u");

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.name === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"},message:"must have required property '"+"name"+"'"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.priceCents === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "priceCents"},message:"must have required property '"+"priceCents"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.opens === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "opens"},message:"must have required property '"+"opens"+"'"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.closes === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "closes"},message:"must have required property '"+"closes"+"'"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
for(const key0 in data){
if(!((((key0 === "name") || (key0 === "priceCents")) || (key0 === "opens")) || (key0 === "closes"))){
const err4 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
if(data.name !== undefined){
let data0 = data.name;
if(typeof data0 === "string"){
if(!pattern0.test(data0)){
const err5 = {instancePath:instancePath+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern: "[\\s\\S]"},message:"must match pattern \""+"[\\s\\S]"+"\""};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
else {
const err6 = {instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(data.priceCents !== undefined){
let data1 = data.priceCents;
if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){
const err7 = {instancePath:instancePath+"/priceCents",schemaPath:"#/properties/priceCents/type",keyword:"type",params:{type: "integer"},message:"must be integer"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
if((typeof data1 == "number") && (isFinite(data1))){
if(data1 < 0 || isNaN(data1)){
const err8 = {instancePath:instancePath+"/priceCents",schemaPath:"#/properties/priceCents/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
}
if(data.opens !== undefined){
let data2 = data.opens;
if(typeof data2 === "string"){
if(!pattern1.test(data2)){
const err9 = {instancePath:instancePath+"/opens",schemaPath:"#/properties/opens/pattern",keyword:"pattern",params:{pattern: "^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"},message:"must match pattern \""+"^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"+"\""};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
else {
const err10 = {instancePath:instancePath+"/opens",schemaPath:"#/properties/opens/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data.closes !== undefined){
let data3 = data.closes;
if(typeof data3 === "string"){
if(!pattern1.test(data3)){
const err11 = {instancePath:instancePath+"/closes",schemaPath:"#/properties/closes/pattern",keyword:"pattern",params:{pattern: "^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"},message:"must match pattern \""+"^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"+"\""};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
}
else {
const err12 = {instancePath:instancePath+"/closes",schemaPath:"#/properties/closes/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
}
}
else {
const err13 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
