var searchIndex = {};
searchIndex['rusted_cypher'] = {"items":[[0,"","rusted_cypher","Rust crate for accessing the cypher endpoint of a neo4j server",null,null],[0,"cypher","","Provides structs used to interact with the cypher transaction endpoint",null,null],[3,"Cypher","rusted_cypher::cypher","Represents the cypher endpoint of a neo4j server",null,null],[3,"CypherQuery","","Represents a cypher query",null,null],[0,"transaction","","Transaction management through neo4j's transaction endpoint",null,null],[3,"Created","rusted_cypher::cypher::transaction","",null,null],[3,"Started","","",null,null],[3,"Transaction","","",null,null],[11,"add_statement","","",0,{"inputs":[{"name":"transaction"},{"name":"s"}],"output":null}],[11,"get_expires","","",0,{"inputs":[{"name":"transaction"}],"output":{"name":"tm"}}],[11,"new","","",0,{"inputs":[{"name":"transaction"},{"name":"str"},{"name":"headers"}],"output":{"name":"transaction"}}],[11,"with_statement","","",0,{"inputs":[{"name":"transaction"},{"name":"s"}],"output":{"name":"self"}}],[11,"begin","","",0,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"with_statement","","",0,{"inputs":[{"name":"transaction"},{"name":"s"}],"output":{"name":"self"}}],[11,"exec","","",0,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"commit","","",0,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"rollback","","",0,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[11,"reset_timeout","","",0,{"inputs":[{"name":"transaction"}],"output":{"name":"result"}}],[0,"statement","rusted_cypher::cypher","",null,null],[3,"Statement","rusted_cypher::cypher::statement","",null,null],[11,"serialize","","",1,{"inputs":[{"name":"statement"},{"name":"__s"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"statement"}],"output":{"name":"statement"}}],[11,"new","","",1,{"inputs":[{"name":"statement"},{"name":"str"}],"output":{"name":"self"}}],[11,"with_param","","",1,{"inputs":[{"name":"statement"},{"name":"str"},{"name":"v"}],"output":{"name":"self"}}],[11,"add_param","","",1,{"inputs":[{"name":"statement"},{"name":"str"},{"name":"v"}],"output":null}],[11,"get_params","","",1,{"inputs":[{"name":"statement"}],"output":{"name":"btreemap"}}],[11,"set_params","","",1,{"inputs":[{"name":"statement"},{"name":"btreemap"}],"output":null}],[11,"remove_param","","",1,{"inputs":[{"name":"statement"},{"name":"str"}],"output":null}],[11,"from","","",1,{"inputs":[{"name":"statement"},{"name":"str"}],"output":{"name":"self"}}],[0,"result","rusted_cypher::cypher","",null,null],[3,"QueryResult","rusted_cypher::cypher::result","",null,null],[12,"results","","",2,null],[12,"errors","","",2,null],[3,"RowResult","","",null,null],[3,"CypherResult","","",null,null],[12,"columns","","",3,null],[12,"data","","",3,null],[3,"Rows","","",null,null],[3,"Row","","",null,null],[8,"ResultTrait","","",null,null],[10,"results","","",4,{"inputs":[{"name":"resulttrait"}],"output":{"name":"vec"}}],[10,"errors","","",4,{"inputs":[{"name":"resulttrait"}],"output":{"name":"vec"}}],[11,"deserialize","","",2,{"inputs":[{"name":"queryresult"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"queryresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"results","","",2,{"inputs":[{"name":"queryresult"}],"output":{"name":"vec"}}],[11,"errors","","",2,{"inputs":[{"name":"queryresult"}],"output":{"name":"vec"}}],[11,"deserialize","","",5,{"inputs":[{"name":"rowresult"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"rowresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"rowresult"}],"output":{"name":"rowresult"}}],[11,"deserialize","","",3,{"inputs":[{"name":"cypherresult"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"cypherresult"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"cypherresult"}],"output":{"name":"cypherresult"}}],[11,"rows","","",3,{"inputs":[{"name":"cypherresult"}],"output":{"name":"rows"}}],[11,"new","","",6,{"inputs":[{"name":"rows"},{"name":"vec"},{"name":"vec"}],"output":{"name":"self"}}],[11,"new","","",7,{"inputs":[{"name":"row"},{"name":"vec"},{"name":"vec"}],"output":{"name":"self"}}],[11,"get","","",7,{"inputs":[{"name":"row"},{"name":"str"}],"output":{"name":"result"}}],[11,"get_n","","",7,{"inputs":[{"name":"row"},{"name":"usize"}],"output":{"name":"result"}}],[11,"next","","",6,{"inputs":[{"name":"rows"}],"output":{"name":"option"}}],[11,"new","rusted_cypher::cypher","Creates a new Cypher",8,{"inputs":[{"name":"cypher"},{"name":"url"},{"name":"headers"}],"output":{"name":"self"}}],[11,"query","","",8,{"inputs":[{"name":"cypher"}],"output":{"name":"cypherquery"}}],[11,"exec","","Executes the given `Statement`",8,{"inputs":[{"name":"cypher"},{"name":"s"}],"output":{"name":"result"}}],[11,"transaction","","",8,{"inputs":[{"name":"cypher"}],"output":{"name":"transaction"}}],[11,"with_statement","","Adds statements in builder like style",9,{"inputs":[{"name":"cypherquery"},{"name":"t"}],"output":{"name":"self"}}],[11,"add_statement","","",9,{"inputs":[{"name":"cypherquery"},{"name":"t"}],"output":null}],[11,"set_statements","","",9,{"inputs":[{"name":"cypherquery"},{"name":"vec"}],"output":null}],[11,"send","","Sends the query to the server",9,{"inputs":[{"name":"cypherquery"}],"output":{"name":"result"}}],[0,"graph","rusted_cypher","",null,null],[3,"ServiceRoot","rusted_cypher::graph","",null,null],[12,"extensions","","",10,null],[12,"node","","",10,null],[12,"node_index","","",10,null],[12,"relationship_index","","",10,null],[12,"extensions_info","","",10,null],[12,"relationship_types","","",10,null],[12,"batch","","",10,null],[12,"cypher","","",10,null],[12,"indexes","","",10,null],[12,"constraints","","",10,null],[12,"transaction","","",10,null],[12,"node_labels","","",10,null],[12,"neo4j_version","","",10,null],[3,"GraphClient","","",null,null],[11,"deserialize","","",10,{"inputs":[{"name":"serviceroot"},{"name":"__d"}],"output":{"name":"result"}}],[11,"connect","","",11,{"inputs":[{"name":"graphclient"},{"name":"str"}],"output":{"name":"result"}}],[11,"neo4j_version","","",11,{"inputs":[{"name":"graphclient"}],"output":{"name":"version"}}],[11,"cypher","","Returns a reference to the `Cypher` instance of the `GraphClient`",11,{"inputs":[{"name":"graphclient"}],"output":{"name":"cypher"}}],[0,"error","rusted_cypher","",null,null],[3,"Neo4jError","rusted_cypher::error","",null,null],[12,"message","","",12,null],[12,"code","","",12,null],[3,"GraphError","","",null,null],[3,"TimeParseError","","",null,null],[11,"deserialize","","",12,{"inputs":[{"name":"neo4jerror"},{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"neo4jerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"neo4jerror"}],"output":{"name":"neo4jerror"}}],[11,"fmt","","",13,{"inputs":[{"name":"grapherror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",13,{"inputs":[{"name":"grapherror"},{"name":"str"}],"output":{"name":"self"}}],[11,"new_neo4j_error","","",13,{"inputs":[{"name":"grapherror"},{"name":"vec"}],"output":{"name":"self"}}],[11,"new_error","","",13,{"inputs":[{"name":"grapherror"},{"name":"box"}],"output":{"name":"self"}}],[11,"fmt","","",13,{"inputs":[{"name":"grapherror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",13,{"inputs":[{"name":"grapherror"}],"output":{"name":"str"}}],[11,"cause","","",13,{"inputs":[{"name":"grapherror"}],"output":{"name":"option"}}],[11,"from","","",13,{"inputs":[{"name":"grapherror"},{"name":"fromutf8error"}],"output":{"name":"self"}}],[11,"from","","",13,{"inputs":[{"name":"grapherror"},{"name":"parseerror"}],"output":{"name":"self"}}],[11,"from","","",13,{"inputs":[{"name":"grapherror"},{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",13,{"inputs":[{"name":"grapherror"},{"name":"error"}],"output":{"name":"self"}}],[11,"fmt","","",14,{"inputs":[{"name":"timeparseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"timeparseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",14,{"inputs":[{"name":"timeparseerror"}],"output":{"name":"str"}}],[11,"from","","",13,{"inputs":[{"name":"grapherror"},{"name":"parseerror"}],"output":{"name":"self"}}]],"paths":[[3,"Transaction"],[3,"Statement"],[3,"QueryResult"],[3,"CypherResult"],[8,"ResultTrait"],[3,"RowResult"],[3,"Rows"],[3,"Row"],[3,"Cypher"],[3,"CypherQuery"],[3,"ServiceRoot"],[3,"GraphClient"],[3,"Neo4jError"],[3,"GraphError"],[3,"TimeParseError"]]};
initSearch(searchIndex);
