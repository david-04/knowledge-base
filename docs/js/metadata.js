addNode(
    ['Databases'],
    'data/node-0001.htm',
    []
);
addNode(
    ['Databases', 'MongoDB'],
    'data/node-0002.htm',
    []
);
addNode(
    ['Databases', 'MongoDB', 'Administration'],
    'data/node-0003.htm',
    []
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Assorted'],
    'data/node-0004.htm',
    [
        ['nodeSection1', ['mgcompacting', 'mgdefragmenting', 'mgrepairdatabase', 'mgegorganise', 'mgreorganize']],
        ['nodeSection2', ['mgvalidatecollection', 'mgcorruptions']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Backup'],
    'data/node-0005.htm',
    [
        ['nodeSection1', ['mgbackups', 'mgbackupdatabases', 'mgdatabasebackup', 'mgfsynclock', 'mgfsyncunlock']],
        ['nodeSection2', ['mgdumpdatabases', 'mgdatabasedumps', 'mgrestoredatabases', 'mgdatabaserestore']],
        ['nodeSection3', ['mgbackupshards']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Monitoring'],
    'data/node-0006.htm',
    [
        ['nodeSection1', ['mgmonitoring', 'mgcurrentoperations', 'mgkilloperations', 'mgstatistics', 'mgstats']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Replication'],
    'data/node-0007.htm',
    [
        ['nodeSection1', ['mgreplicasets', 'mgreplication', 'mgprimary', 'mgsecondary', 'mgreplicatedata', 'mgelection', 'mgmembers']],
        ['nodeSection2', ['mgreplset', 'mgrepset', 'mgsetupreplication', 'mgsetupreplset', 'mgsetuprepset']],
        ['nodeSection3', ['mgreplicationtest', 'mgtestreplication', 'mgreplsettest', 'mgrepsettest']],
        ['nodeSection4', ['mgreplsetmaintenance', 'mgmaintainreplset', 'mgreplicationmaintenance', 'mgrepsetmaintenance']],
        ['nodeSection5', ['mgoplogs', 'mgresizeoplogs', 'mgreplicationoplogs', 'mgtransactionlog']],
        ['nodeSection6', ['mgreplicateindexes', 'mgreplicateindexes', 'mgreplsetindexes', 'mgrepsetindexes']],
        ['nodeSection7', ['mgreplsetclients', 'mgepsetclients', 'mgreplicationclients']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Server startup'],
    'data/node-0008.htm',
    [
        ['nodeSection1', ['mgserverstartup', 'mgstartservers', 'mgd']],
        ['nodeSection2', ['mgconfigurationfile', 'mgsettingsfile', 'mgconfiguration']],
        ['nodeSection3', ['mgservershutdown', 'mgshutdownservers']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Sharding'],
    'data/node-0009.htm',
    [
        ['nodeSection1', ['mgsharding', 'mgshards', 'mgpartitioning', 'mgchunks', 'mgs', 'mgmongos', 'mgconfigservers']],
        ['nodeSection2', ['mgsetupsharding', 'mgshardingsetup', 'mgsetupshards', 'mgshardsetup', 'mgsetupconfigservers', 'mgsetupshardconfigservers']],
        ['nodeSection3', ['mgshardtags', 'mgagshards', 'mgsahrdtagging', 'mgshardstags', 'mgshardstagging', 'mgtagranges', 'mgshardstagranges', 'mgshardingtagranges']],
        ['nodeSection4', ['mgbalancing', 'mgbalancer', 'mgbalanceshards', 'mgshardingbalancer', 'mgshardbalancer', 'mgshardsbalancer', 'mgstartbalancer', 'mgstopbalancer', 'mgmovechunk']],
        ['nodeSection5', ['mgshardconfiguration', 'mgshardingconfiguration', 'mgshardconfiguration', 'mgconfigureshards', 'mgconfiguresahrding']],
        ['nodeSection6', ['mgremoveshards']],
        ['nodeSection7', ['mgshardingtest', 'mgshardtest', 'mgshardstest', 'mgtestshards', 'mgtestsharding']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'Tuning'],
    'data/node-0010.htm',
    [
        ['nodeSection1', ['mgprofiling', 'mgprofiler', 'mgrofile']],
        ['nodeSection2', ['mgcaching', 'mgcache', 'mgpreloading', 'mgpreloaddata', 'mgcachedata', 'mgpreheating', 'mgpreheatdata']],
        ['nodeSection3', ['mgmacrorecording', 'mgmacrorecorder', 'mgreplaycommands', 'mgcommandrecorder', 'mgrecordcommands', 'mgcapturecommands']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'Administration', 'User management'],
    'data/node-0011.htm',
    [
        ['nodeSection1', ['mgusermanagement', 'mguseradministration', 'mgadduser', 'mgremoveuser', 'mgmanageusers', 'mgadministrateusers']],
        ['nodeSection2', ['mgauthentication', 'mglogin']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL'],
    'data/node-0012.htm',
    []
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Aggregations'],
    'data/node-0013.htm',
    [
        ['nodeSection1', ['mggroupby', 'mgcount', 'mgdistinct', 'mgaggreations', 'mgaggregate']],
        ['nodeSection2', ['mgaggregationframework', 'mgprojections']],
        ['nodeSection3', ['mgsum', 'mgavg', 'mgaverage', 'mgmin', 'mgmax', 'mgfirst', 'mglast']],
        ['nodeSection4', ['mgadd', 'mgsubtract', 'mgmultiply', 'mgdivide', 'mgmodulo', 'mgcalculations', 'mgsubstring', 'mgdates', 'mgtolower', 'mgtoupper', 'mgtolower', 'mglower']],
        ['nodeSection5', ['mgmapreduce']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Collections'],
    'data/node-0014.htm',
    [
        ['nodeSection1', ['mgcollections', 'mggetcollections', 'mgcollectionstatistics', 'mgtables']],
        ['nodeSection2', ['mgcreatecollections', 'mgcappedcollections']],
        ['nodeSection3', ['mgrenamecollections', 'mgdropcollections', 'mgdeletecollections', 'mgclonecollections']],
        ['nodeSection4', ['mgdatatypes']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Databases'],
    'data/node-0015.htm',
    [
        ['nodeSection1', ['mgdatabases', 'mgdbs', 'mgadmindatabase', 'mgadmindb', 'mglocaldb', 'mglocaldatabase', 'mgconfigdatabase', 'mgconfigdb']],
        ['nodeSection2', ['mggetdbs', 'mgtabases', 'mgshowdbs', 'mgshowdatabases', 'mglistdbs', 'mglistdatabases', 'mgswitchdatabases', 'mgselectdatabases']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'GridFS'],
    'data/node-0016.htm',
    [
        ['nodeSection1', ['mgstorefiles', 'mgfilestorage', 'mguploadfiles', 'mgfileupload', 'mggridfs', 'mggridfilesystem', 'mgfilesystem', 'mgfiles']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Indexes'],
    'data/node-0017.htm',
    [
        ['nodeSection1', ['mgindexes', 'mgcreateindexes', 'mgensureindexes', 'mgindices', 'mgcreateindices', 'mgdropindexes', 'mgdropindices']],
        ['nodeSection2', ['mgexpiringindexes', 'mgexpiringindices', 'mgautoexpxire', 'mgautoexpiring', 'mgtemporarydata', 'mgtemporarydocuments', 'mgtempdata']],
        ['nodeSection3', ['mgfts', 'mgfulltextsearch', 'mgfulltextindices', 'mgfulltextindexes', 'mgindexfulltext']],
        ['nodeSection4', ['mggeometricindexes', 'mggeometricindices', 'mggeospatialindexes', 'mggeospatialindices', 'mglocationindexes', 'mglocationindices']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['mgexplainplans', 'mgoptimiserhints', 'mgoptimizierhints', 'mghints']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Insert, update, delete'],
    'data/node-0018.htm',
    [
        ['nodeSection1', ['mgcrud', 'mginsertstatement', 'mginsertdocument', 'mginsertcommand']],
        ['nodeSection2', ['mgupsert', 'mgsavedocumenst', 'mgupsertdocuments', 'mgupsercommand']],
        ['nodeSection3', ['mgupdatestatement', 'mgupdateccommand', 'mgupdatedocuments']],
        ['nodeSection4', ['mgdeletedocuments', 'mgdeletestatement', 'mgdeletecommand', 'mgremovedocuments']],
        ['nodeSection5', ['mgcommit']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Select'],
    'data/node-0019.htm',
    [
        ['nodeSection1', ['mgselectdocuments', 'mgselectstatement', 'mgselectcommand', 'mgfindone', 'mgskip', 'mgtake', 'mglimit', 'mgsort']],
        ['nodeSection2', ['mgcompare', 'mgcomparison', 'mgin', 'mggte', 'mgte', 'mgin', 'mgnin', 'mgnot', 'mgmod', 'mgequal', 'mgnotequal', 'mgneq']],
        ['nodeSection3', ['mgnesteddocuments', 'mgselectnesteddocuments', 'mgnesteproperties', 'mgselectnestedproperties']],
        ['nodeSection4', ['mgand', 'mgor', 'mgnor', 'mglogicaloperators', 'mglogicaloperations', 'mglogicalconditions']],
        ['nodeSection5', ['mgarrays', 'mgselectarrays', 'mgnestedarrays']],
        ['nodeSection6', ['mgselectfulltextsearch']],
        ['nodeSection7', ['mgselectgeospatial', 'mgselectgeometry']],
        ['nodeSection8', ['mgwhereconditions', 'mgwhereclauses']],
        ['nodeSection9', ['mgcursors']]
    ]
);
addNode(
    ['Databases', 'MongoDB', 'DDL/SQL', 'Shell'],
    'data/node-0020.htm',
    [
        ['nodeSection1', ['mgshell', 'mgscripting', 'mgscripts', 'mgrunscripts', 'mgexecutescripts', 'mgautomation']],
        ['nodeSection2', ['mgprint', 'mgloadscripts', 'mgruncommands', 'mgadmincommands', 'mgrunadmincommands']],
        ['nodeSection3', ['mgrc', 'mgshellconfiguration']]
    ]
);
addNode(
    ['Databases', 'Redis'],
    'data/node-0021.htm',
    []
);
addNode(
    ['Databases', 'Redis', 'Cluster'],
    'data/node-0022.htm',
    [
        ['nodeSection1', ['rdreplication', 'rdreplicatedatabases', 'rdreplicatedbs', 'rdmirrors', 'rdmirrordatabases', 'rdmirrordbs', 'rdmasterslaves', 'rdmasters', 'rdslaves']],
        ['nodeSection2', ['rdfailover', 'rdsentinels', 'rdwatchdog', 'rdfailoverwatchdog']],
        ['nodeSection3', ['rdpartitioning', 'rdpartitiondatabases', 'rdpartitiondbs', 'rddistribution', 'rddistributedatabases', 'rddistributedbs', 'rdsharding', 'rdsharddatabases']],
        ['nodeSection4', ['rdclusters']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Commands'],
    'data/node-0023.htm',
    [
        ['nodeSection1', ['rdserverprocess', 'rdstartservers', 'rdclients', 'rdswitchdatabases', 'rdselectdatabases', 'rdcommands']],
        ['nodeSection2', ['rdkeys', 'rdgetkeys', 'rdrandomkeys', 'rddeleteobjects', 'rddeletekeys', 'rddeletedatabases', 'rdtruncatedatabases', 'rdflushdatabases']],
        ['nodeSection3', ['rdexpiration', 'rdexpirekeys', 'rdttl', 'rktempkeys', 'rktempdata']],
        ['nodeSection4', ['rdbatchoperations', 'rdbatchcommands', 'rdtransactions', 'rdwatches', 'rdmulti', 'rdexec', 'rddiscard', 'rdunwatch', 'rdcommandscripts', 'rdqueryscripts']],
        ['nodeSection5', ['rdserverinfo', 'rdserverstatistics', 'rdserveradministration', 'rdadmincommands', 'rdadministrationcommands', 'rdshutdown', 'rdstopserver', 'rdmonitoring', 'rdstatistics', 'rdmigrations']],
        ['nodeSection6', ['rdlistclients', 'rdmonitorclients', 'rdclients', 'rdadministrateclients']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Bitmaps'],
    'data/node-0024.htm',
    [
        ['nodeSection1', ['rdbitmaps', 'rdcontainers', 'rdcollections', 'rdarrays', 'rdbitarrays', 'rdbitwise']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Hash tables'],
    'data/node-0025.htm',
    [
        ['nodeSection1', ['rdhashtables', 'rdhashes', 'rdcontainers', 'rdcollections']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Lists'],
    'data/node-0026.htm',
    [
        ['nodeSection1', ['rdlists', 'rdcontainers', 'rdcollections', 'rdlinkedlists', 'rdstacks', 'rdqueues', 'rdarrays']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Scalar values'],
    'data/node-0027.htm',
    [
        ['nodeSection1', ['rdselects', 'rdupdates', 'rdinserts', 'rddeletes', 'rdstrings', 'rdnumbers', 'rdkeys', 'rdset', 'rdmset', 'rdget', 'rdmget', 'rdincrements', 'rddecrements', 'rdgetkeys', 'rdsetkeys', 'rddeletekeys', 'rddelkeys']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Sets (HperyLogLog)'],
    'data/node-0028.htm',
    [
        ['nodeSection1', ['rdsets', 'rdhyperloglogs', 'rdcontainers', 'rdcollections']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Sets (sorted)'],
    'data/node-0029.htm',
    [
        ['nodeSection1', ['rdsortedsets', 'rdcontainers', 'rdcollections', 'rdsets']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Data types - Sets (unsorted)'],
    'data/node-0030.htm',
    [
        ['nodeSection1', ['rdunsortedsets', 'rdsets', 'rdcollections', 'rcontainers']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Lua'],
    'data/node-0031.htm',
    [
        ['nodeSection1', ['rdlua', 'rdscripting', 'rdscripts', 'rdluascripts']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Messaging'],
    'data/node-0032.htm',
    [
        ['nodeSection1', ['rdmessaging', 'rdmessagebroker', 'rdmessageexchhange', 'rdexchangemessages', 'rdpublishers', 'rdsubscribers', 'rdchannels', 'rdpublishmessages']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Persistence'],
    'data/node-0033.htm',
    [
        ['nodeSection1', ['rdpersistence', 'rdsavedatabases', 'rdbackups', 'rdbackupdatabases', 'rdfiles', 'rddatabasefiles', 'rdpersistdatabases']],
        ['nodeSection2', ['rdb', 'rdbdumps', 'rdcreatedumps', 'rddumpdatabases', 'rddatabasedump', 'rddbdumps', 'rddumpdbs', 'rdexportdatabases', 'rdexportdbs', 'rdsave', 'rdbgsave', 'rdautosave']],
        ['nodeSection3', ['rdjournal', 'rdlog', 'rdappendonlyfile', 'rdaof', 'rdbgrewriteaof', 'rdtransactionlog', 'rdjournaling', 'rdjournalling']]
    ]
);
addNode(
    ['Databases', 'Redis', 'Security '],
    'data/node-0034.htm',
    [
        ['nodeSection1', ['rdauthentication', 'rdauthentifictation', 'rdsecurity', 'rdauthorisation', 'rdauthorization', 'rdpasswords', 'rdlogins', 'rdacls', 'rdpasswordprotected']],
        ['nodeSection2', ['rdobfuscation', 'rdprotection', 'rdprotected', 'rdrenamecommands', 'rdobfuscatecommands', 'rdhidecommands', 'rddisablecommands', 'rddeactivatecommands']],
        ['nodeSection3', ['rdlistenport', 'rdbinding', 'rdbindport', 'rdlocalaccess', 'rdrestrictaccess', 'rdlimitaccess']]
    ]
);
addNode(
    ['Databases', 'SQL Server'],
    'data/node-0035.htm',
    []
);
addNode(
    ['Databases', 'SQL Server', 'Administration'],
    'data/node-0036.htm',
    []
);
addNode(
    ['Databases', 'SQL Server', 'Administration', 'Assorted'],
    'data/node-0037.htm',
    [
        ['nodeSection1', ['ssdefaultdatabases', 'ssdefaultdbs', 'ssmaster', 'ssmodel', 'sstempdb', 'ssmsdb']],
        ['nodeSection2', ['sscommandlinetools', 'sssqlplus', 'sssql+']],
        ['nodeSection3', ['sschangetracking', 'sstrackchanges']],
        ['nodeSection4', ['ssbackups', 'ssrecovery', 'ssdatabasebackups', 'ssdatabackup', 'ssbackingup', 'ssbackupdatabases']],
        ['nodeSection5', ['ssnormalforms', 'ssnormalization', 'ssnormalisation']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Administration', 'Databases and schemas'],
    'data/node-0038.htm',
    [
        ['nodeSection1', ['ssdatabases', 'ssmanagedatabases', 'ssdatabasemanagement', 'sscreatedatabases', 'sscreatedbs', 'ssmanagedbs', 'ssdbmanagement']],
        ['nodeSection2', ['ssschenmas', 'sscreateschemas']],
        ['nodeSection3', ['ssfilestreamstorages', 'ssexternalfile', 'ssfilestorage', 'ssstorefiles']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Administration', 'Encryption'],
    'data/node-0039.htm',
    [
        ['nodeSection1', ['ssencryption', 'ssencryptdata', 'ssdataencryption', 'ssdataprotection', 'ssprotectdata', 'sscreatekey', 'sskeys', 'sscertificates']],
        ['nodeSection2', ['ssmasterkeys']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Administration', 'System catalogue'],
    'data/node-0040.htm',
    [
        ['nodeSection1', ['sssystemcatalogues', 'ssystemcatalogs', 'sscatalogues', 'sscatalogs', 'sssysteminformation', 'ssinformation', 'ssmetadata', 'sssystemdatabases', 'sssystemdbs']],
        ['nodeSection2', ['sshelp', 'ssinfo', 'sshelptable', 'sshelpviews']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Administration', 'User management'],
    'data/node-0041.htm',
    [
        ['nodeSection1', ['ssusermanagement', 'ssusers', 'ssmanageusers', 'ssauthentication', 'sslogins', 'sscreateusers', 'sspasswords']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['ssroles', 'sscreateroles', 'ssmembers', 'ssrolemembers', 'ssaddmembers', 'ssaddrolemembers']],
        ['nodeSection4', ['ssauthorisation', 'ssauthorization', 'sspermissions', 'ssuserpermissions', 'ssgrantpermissions', 'ssallow', 'ssdeny', 'ssallowaccess', 'ssdenyaccess', 'ssuserpermissions', 'ssgrantuserpermissions', 'ssrights']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML'],
    'data/node-0042.htm',
    []
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Data types'],
    'data/node-0043.htm',
    [
        ['nodeSection1', ['ssdatatypes', 'ssnumericdatatypes', 'ssdatatypesnumeric', 'ssinteger', 'ssdecimal', 'ssfloat', 'ssmoney', 'sscolumns', 'sscolumntypes', 'sscurrency']],
        ['nodeSection2', ['ssstringdatatypes', 'ssdatatypestrings', 'sscharacter', 'ssvarchar', 'ssncharacter', 'ssnvarchar']],
        ['nodeSection3', ['ssdatedatattypes', 'ssdatatypedate', 'sstimedatatypes', 'ssdatatypetime', 'ssdatetime', 'ssdateandtime', 'ssdate', 'sstime', 'ssdateformat', 'sstimeformat']],
        ['nodeSection4', ['ssblob', 'ssbinary', 'ssvarbinary', 'ssuniqueidentifier', 'sstimestamp', 'ssrowversion']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Indices'],
    'data/node-0044.htm',
    [
        ['nodeSection1', ['ssindex', 'ssindices', 'sscreateindex', 'sscreatindices', 'ssuniqueindex', 'ssclusteredindex', 'ssnonclusteredindex', 'ssclusteredindices', 'ssnonclusteredindices']],
        ['nodeSection2', ['ssindexstatistics', 'ssstatistics']],
        ['nodeSection3', ['sscolumnstoreindex', 'sscolumnstoreindices']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Insert/update/delete'],
    'data/node-0045.htm',
    [
        ['nodeSection1', ['sscrud', 'sssql', 'ssinsert']],
        ['nodeSection2', ['ssupdate']],
        ['nodeSection3', ['ssdelete']],
        ['nodeSection4', ['sstruncatetables']],
        ['nodeSection5', ['ssmergetables']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Select'],
    'data/node-0046.htm',
    [
        ['nodeSection1', ['ssselectcase', 'sscase']],
        ['nodeSection2', ['ssselectwhere', 'sswhere', 'ssselectconditions', 'ssconditions', 'sslike', 'ssinbetween', 'ssbetween', 'sstop', 'ssoffset']],
        ['nodeSection3', ['ssunionall', 'ssintersect', 'ssexcept']],
        ['nodeSection4', ['sssubqueries', 'ssselectin', 'ssexists']],
        ['nodeSection5', ['ssselectjoins', 'sselectouterjoins', 'ssselectleftouterjoins', 'ssselectcrossjoins', 'ssjoins', 'ssinnerjoins', 'ssouterjoins', 'sscrossjoins', 'ssleftouterjoins']],
        ['nodeSection6', ['ssgrouping', 'ssgroupby', 'ssselectgroupby', 'ssmin', 'ssmax', 'ssavg', 'sscount', 'sssum', 'ssvar', 'ssstdev', 'ssdeviation', 'ssstandarddeviation']],
        ['nodeSection7', ['ssover', 'selectover', 'sspartitions', 'ssselectpartitions', 'sspartitioning', 'sscubes', 'ssrollups', 'ssranking', 'ssntile', 'sspivot', 'ssolap', 'ssgrouping', 'ssgroupingid']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Select - Full-text search'],
    'data/node-0047.htm',
    [
        ['nodeSection1', ['ssfulltextsearch', 'sssemanticsearch', 'sssearchindexer', 'ssearchindexing']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Select - Optimiser'],
    'data/node-0048.htm',
    [
        ['nodeSection1', ['ssexecutionplans', 'ssexplainplans', 'ssquerystatistics', 'ssstatistics']],
        ['nodeSection2', ['ssoptimiserhints', 'ssoptimizierhints', 'sshints']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Sequences'],
    'data/node-0049.htm',
    [
        ['nodeSection1', ['sssequences', 'sscreatesequences', 'ssresetsequences']],
        ['nodeSection2', ['ssnextvalue', 'sssequencenextvalue', 'sssequencevalue']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Synonyms and types'],
    'data/node-0050.htm',
    [
        ['nodeSection1', ['sssynonyms', 'sstablesynonyms', 'sscreatesynonyms']],
        ['nodeSection2', ['sstypes', 'sstypealiases', 'sscustomtypes', 'sscustomdatatypes', 'sscreatetypes']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Tables'],
    'data/node-0051.htm',
    [
        ['nodeSection1', ['sstables', 'sscreatetables', 'ssaltertables', 'sskeys', 'ssprimarykeys', 'sstemptables', 'sscreatetemptables', 'sstemporarytables', 'sscreatetemporarytables', 'ssforeignkeys']],
        ['nodeSection2', ['ssversionedtables', 'historicisedtables', 'ssversioning', 'sshistoricisationing']],
        ['nodeSection3', ['sspinnedtables', 'sstablecaching', 'sscachetables', 'ssmemorytables', 'sscaching', 'sspinning', 'ssunpinning']],
        ['nodeSection4', ['ssmemoryoptimisedtables', 'ssmemoryoptimizedtables', 'ssmemorytables']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Transactions'],
    'data/node-0052.htm',
    [
        ['nodeSection1', ['sstransactions', 'sstransactionhandling', 'ssbegintransactions', 'sscommit', 'ssroolback', 'sssavetransaction', 'ssrestorepoint', 'sstransactionrestorepoint']],
        ['nodeSection2', ['sslocks', 'ssisolationlevel', 'ssreaduncommitted', 'sssnapshot', 'sslocking', 'sslockrows', 'ssrowlocks']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'Views'],
    'data/node-0053.htm',
    [
        ['nodeSection1', ['ssviews', 'sscreateviews']],
        ['nodeSection2', ['ssmaterialisedviews', 'ssmaterializedviews', 'sscreatematerialisedviews', 'sscreatematerializedviews']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'DDL / DML', 'XML and JSON'],
    'data/node-0054.htm',
    [
        ['nodeSection1', ['ssxmldata', 'ssxmlcolumns', 'ssxmlindex', 'ssxmlindices', 'ssxmlquery', 'ssquery', 'ssxquery', 'ssxpath', 'ssstorexml']],
        ['nodeSection2', ['ssxmlparser', 'ssxmlparsing', 'ssparsexml', 'ssopenxml']],
        ['nodeSection3', ['ssxmlresultsets', 'ssxmlselect']],
        ['nodeSection4', ['ssjson', 'ssopenjson']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Scripting'],
    'data/node-0055.htm',
    []
);
addNode(
    ['Databases', 'SQL Server', 'Scripting', 'Stored procedures'],
    'data/node-0056.htm',
    [
        ['nodeSection1', ['ssprocedures', 'sstoredprocedures', 'ssexecuteprocedures', 'ssexecprocedures']],
        ['nodeSection2', ['sstableprocedures', 'sstablestoredprocedures']],
        ['nodeSection3', ['ssfunctions', 'ssstoredfunctions']],
        ['nodeSection4', ['sstablefunctions', 'sstablestoredfunctions']],
        ['nodeSection5', ['sstableparameters', 'sstableinput']],
        ['nodeSection6', ['sscompiledprocedures', 'sscompiledstoredprocedures']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Scripting', 'System functions'],
    'data/node-0057.htm',
    [
        ['nodeSection1', ['ssbuiltinfunctions', 'ssnumericfunctions', 'ssabs', 'sssignature', 'ssfloor', 'ssceiling', 'ssround', 'sssqrt', 'sspower', 'ssexp', 'sslog', 'ssrand']],
        ['nodeSection2', ['ssdatefunctions', 'ssdatetimefunctions', 'sstimefunctions', 'ssgetdate', 'ssdatepart', 'ssdatename', 'ssdatediff', 'ssyear', 'ssmonth', 'ssday']],
        ['nodeSection3', ['ssstringfunctions', 'sslength', 'ssleft', 'ssright', 'sssubstring', 'sstrim', 'ssltrim', 'ssrtrim', 'sssearch', 'ssreplace', 'sscharindex', 'sslower', 'sstolower', 'sstoupper', 'ssupper', 'ssreverse', 'sssimilarity']],
        ['nodeSection4', ['sscasts', 'sscasting', 'sstypecasting', 'sstypeconversions', 'ssconversions', 'ssconverttype', 'sstryconvert']],
        ['nodeSection5', ['ssnullfunctions', 'sscoalesce', 'ssisnull', 'ssnulliff', 'ssgetansinull']],
        ['nodeSection6', ['ssidfunctions', 'sscurrenttimestamp', 'ssnewid', 'ssnewsequentialid']],
        ['nodeSection7', ['ssuserfunctions', 'sscurrentusers', 'sssystemusers', 'ssuserids', 'ssusernames', 'ssdbids', 'ssdbnames', 'ssdatabaseids', 'ssdatabasenames']],
        ['nodeSection8', ['ssmetdatafunctionsn', 'sscolumnproperties', 'sstableproperties', 'ssgetproperties']],
        ['nodeSection9', ['ssbinaryoperation', 'ssbinaryoperators', 'ssbitwiseoperators']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Scripting', 'Triggers'],
    'data/node-0058.htm',
    [
        ['nodeSection1', ['sstriggers', 'sscreatetrigger', 'ssonupdate', 'ssondelete', 'ssoninsert', 'ssdmltriggers', 'sssqltriggers']],
        ['nodeSection2', ['ssddltriggers']]
    ]
);
addNode(
    ['Databases', 'SQL Server', 'Scripting', 'T-SQL syntax'],
    'data/node-0059.htm',
    [
        ['nodeSection1', ['sstsqllanguage', 'sstsqlprgoramminglanguage', 'sssyntax', 'ssscripting', 'ssscripts', 'ssprogramminglanguage', 'ssprint', 'ssconsoleoutput', 'sswrite', 'sslog', 'ssdebug']],
        ['nodeSection2', ['ssvariables', 'sstsqlvariables', 'ssset', 'ssdeclare']],
        ['nodeSection3', ['sscontrolstructurs', 'sstsqlcontrolstructures', 'ssblocks', 'sstsqlblocks', 'ssif', 'sstsqlif', 'sswhile', 'sstsqlwhile', 'ssbreak', 'sstsqlbreak', 'sscontinue', 'sstsqlcontinue', 'ssgoto', 'sstsqlgoto', 'ssreturn', 'sstsqlreturn']],
        ['nodeSection4', ['sserrorhandling', 'sstsqlerrorhandling', 'ssexceptions', 'sstsqlexceptions', 'sstrycatch', 'sstsqltrycatch', 'ssthrow', 'sstsqlthrow', 'ssraiseerror', 'sstsqlraiseerror', 'sscatch', 'sstsqlcatch']],
        ['nodeSection5', ['sscursors', 'sstsqlcursors']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['sstimeouts', 'sstsqltimeouts', 'ssdelays', 'sstsqldelays', 'sspause', 'sstsqlpause', 'sswait', 'sstsqlwait']]
    ]
);
addNode(
    ['Libraries'],
    'data/node-0060.htm',
    []
);
addNode(
    ['Libraries', 'Angular 1'],
    'data/node-0061.htm',
    []
);
addNode(
    ['Libraries', 'Angular 1', 'Ajax'],
    'data/node-0062.htm',
    [
        ['nodeSection1', ['ng1ajax', 'ng1http', 'ng1$http', 'ng1httpget', 'ng1$httpget', 'ng1ajaxget', 'ng1ajaxpost', 'ng1httppost', 'ng1$httppost', 'ng1httrequest', 'ng1$httprequest']],
        ['nodeSection2', ['ng1httptransform', 'ng1$httptransform', 'ng1requestransformation', 'ng1responsetransformation', 'ng1transformrequests', 'ng1transformresponses']],
        ['nodeSection3', ['ng1httpinterceptor', 'ng1$httpinterceptor', 'ng1intercepthttprequest', 'ng1intercepthttpresponse', 'ng1interceptajaxrequest', 'ng1interceptajaxresponse', 'ng1interceptor']],
        ['nodeSection4', ['ng1configureajax', 'ng1configurehttp', 'ng1configure$http', 'ng1ajaxconfiguration', 'ng1httpconfiguration', 'ng1$httpconfiguration']],
        ['nodeSection5', ['ng1$resource', 'ng1resource', 'ng1restapi', 'ng1restful', 'ng1webservices', 'ng1servicealls', 'ng1webapis']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Animations'],
    'data/node-0063.htm',
    [
        ['nodeSection1', ['ng1animations', 'ng1fadein', 'ng1fadeout', 'ng1animate', 'ng1effects', 'ng1animationeffects']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Assorted'],
    'data/node-0064.htm',
    [
        ['nodeSection1', ['ng1folderstructure', 'ng1directories', 'ng1folders', 'ng1directorystrucutre']],
        ['nodeSection2', ['ng1errorhandling', 'ng1exceptions', 'ng1interceptexceptions', 'ng1catchexceptions', 'ng1exceptionhandler', 'ng1exceptionhandling']],
        ['nodeSection3', ['ng1$location', 'ng1location', 'ng1urls', 'ng1history', 'ng1browserhistory']],
        ['nodeSection4', ['ng1$interval', 'ng1$timeout', 'ng1$timer', 'ng1interval', 'ng1timeout', 'ng1timer']],
        ['nodeSection5', ['ng1logging', 'ng1console', 'ng1logerror', 'ng1logwarning', 'ng1loginfo', 'ng1logdebug', 'ng1$logerror', 'ng1$logwarning', 'ng1$loginfo', 'ng1$logdebug']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Control structures'],
    'data/node-0065.htm',
    [
        ['nodeSection1', ['ng1controlstructures', 'ng1ifthenelse', 'ng1show', 'ng1hide', 'ng1conditional', 'ng1conditions']],
        ['nodeSection2', ['ng1switchase', 'ng1case']],
        ['nodeSection3', ['ng1iterations', 'ng1iterating', 'ng1iteratearrays', 'ng1iteratecollections', 'ng1looparrays', 'ng1loopcollections', 'ng1repeatstart', 'ng1repeatend']],
        ['nodeSection4', ['ng1iteratingproperties', 'ng1iteratingobjectproperties']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Controllers'],
    'data/node-0066.htm',
    [
        ['nodeSection1', ['ng1controllers', 'ng1scopes', 'ng1controllerscopes']],
        ['nodeSection2', ['ng1scopelesscontrollers']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Data binding'],
    'data/node-0067.htm',
    [
        ['nodeSection1', ['ng1databinding', 'ng1binddata', 'ng1bindtemplate', 'ng1bindhtml', 'ng1model', 'ng1nonbindable', 'ng1cloak', 'ng1onewaybinding', 'ng1inlinebinding', 'ng1twowaybinding']],
        ['nodeSection2', ['ng1href', 'ng1src', 'ng1srcset', 'ng1open']],
        ['nodeSection3', ['ng1styles', 'ng1classes', 'ng1classeven', 'ng1classodd', 'ng1css']],
        ['nodeSection4', ['ng1watchers', 'ng1$watch', 'ng1propagatedatachanges', 'ng1propagation', 'ng1datapropagation', 'ng1monitoring']],
        ['nodeSection5', ['ng1$sanitize', 'ng1$sanitise', 'ng1sanitize', 'ng1sanitize', 'ng1removejavascript', 'ng1removejs', 'ng1deletejs', 'ng1deletejavascript']],
        ['nodeSection6', ['ng1$parse', 'ng1parse', 'ng1$interpolate', 'ng1interpolate', 'ng1$compile', 'ng1compile', 'ng1bindexpression', 'ng1expressionbinding', 'ng1interpolation', 'ng1parsing', 'ng1compiling']],
        ['nodeSection7', ['ng1inlinedelimiters', 'ng1inlinebindingdelimiters', 'ng1inlinedatabindingdeliiters']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Directives'],
    'data/node-0068.htm',
    [
        ['nodeSection1', ['ng1directives']],
        ['nodeSection2', ['ng1linkfuntions']],
        ['nodeSection3', ['ng1compilefuntions', 'ng1directiveconfiguration', 'ng1configuredirectives', 'ng1directivescope']],
        ['nodeSection4', ['ng1directivetemplates', 'ng1directivetransclusion', 'ng1directivetransclude', 'ng1transclude', 'ng1templates']],
        ['nodeSection5', ['ng1directivetwowaydatabinding', 'ng1directivetwowaybinding', 'ng1directivevalidation', 'ng1directiveforms', 'ng1$formatters', 'ng1formatters', 'ng1$render', 'ng1render']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Events'],
    'data/node-0069.htm',
    [
        ['nodeSection1', ['ng1eventhandling', 'ng1eventshandling', 'ng1handleevents', 'ng1events', 'ng1click', 'ng1mouseenter', 'ng1onclick', 'ng1onmouseenter', 'ng1mouseleave', 'ng1onmouseleave']],
        ['nodeSection2', ['ng1dblclick', 'ng1ondblclick', 'ng1doubleclick', 'ng1ondoubleclick', 'ng1blur', 'ng1onlbur', 'ng1focus', 'ng1onfocus', 'ng1key', 'ng1onkey', 'ng1submit', 'ng1onsubmit']],
        ['nodeSection3', ['ng1ready', 'ng1onready', 'ng1emitevents', 'ng1sendevents', 'ng1triggerevents', 'ng1onload', 'ng1load']],
        ['nodeSection4', ['ng1urlevents', 'ng1locationevents', 'ng1onurlchange', 'ng1urlchange', 'ng1locationchange', 'ng1onlocationchange', 'ng1$locationchangestart', 'ng1$locationchangesuccess']],
        ['nodeSection5', ['ng1touchevents', 'ng1ontouch', 'ng1swipeevents', 'ng1swiperight', 'ng1onswiperight', 'ng1swipeleft', 'ng1onwsipeleft']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Filters'],
    'data/node-0070.htm',
    [
        ['nodeSection1', ['ng1filters', 'ng1customfilters', 'ng1$filters']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['ng1collectionfilters', 'ng1filtercollection', 'ng1arrayfilters', 'ng1filterarrays', 'ng1limitto', 'ng1filter', 'ng1orderby', 'ng1ordercollection', 'ng1sortcollections', 'ng1sortby', 'ng1sortarrays']],
        ['nodeSection4', ['ng1uppercase', 'ng1lowercase', 'ng1touppercase', 'ng1tolowercase', 'ng1tojson', 'ng1json', 'ng1formatjson']],
        ['nodeSection5', ['ng1currency', 'ng1numbers', 'ng1filtercurrency', 'ng1formatcurrency', 'ng1filternumbers', 'ng1formatnumbers']],
        ['nodeSection6', ['ng1datetime', 'ng1dateandtime', 'ng1time', 'ng1filterdatetime', 'ng1formatdatetime', 'ng1filtertime', 'ng1formattime', 'ng1filterdateandtime', 'ng1formatdateandtime']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Forms'],
    'data/node-0071.htm',
    [
        ['nodeSection1', ['ng1forms', 'ng1validation', 'ng1validateforms', 'ng1input', 'ng1buttons', 'ng1readonly', 'ng1maxlength', 'ng1pattern', 'ng1required', 'ng1checked', 'ng1truevalue', 'ng1falsevalue', 'ng1disabled']],
        ['nodeSection2', ['ng1listboxes', 'ng1select', 'ng1options', 'ng1selected']],
        ['nodeSection3', ['ng1$error', 'ng1formerrors', 'ng1validationerrors', 'ng1error', 'ng1pristine', 'ng1$pristine', 'ng1dirty', 'ng1$dirty', 'ng1valid', 'ng1$valid', 'ng1invalid', 'ng1$invalid']],
        ['nodeSection4', ['ng1formstyling', 'ng1formcss', 'ng1styleforms', 'ng1styleformvalidations']],
        ['nodeSection5', ['ng1formerrormessages', 'ng1validationerrormessages', 'ng1showvalidationerrors', 'ng1valitationerrors', 'ng1errormessages']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Injection'],
    'data/node-0072.htm',
    [
        ['nodeSection1', ['ng1$injector', 'ng1injector', 'ng1injection', 'ng1dpendencyinjection', 'ng1injectdependencies', 'ng1manualinjection', 'ng1resolvedependencies', 'ng1injectdependencies']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'jqLite'],
    'data/node-0073.htm',
    [
        ['nodeSection1', ['ngjquery', 'ngjqlite', 'ng$rootelement', 'ngrootelement', 'ng$document', 'ngdocument', 'ng$window', 'ngwindow', 'ngalert', 'ngdom']],
        ['nodeSection2', ['ngcss', 'ngclasses', 'ngcssclasses', 'ngsetcssstyles', 'ngsetstyles', 'ngsetclasses', 'ngsetcssclasses', 'ngaddclasses', 'ngremoveclasses', 'nghasclasses', 'ngtoggleclasses']],
        ['nodeSection3', ['ng1text', 'ng1settext', 'ng1html', 'ng1sethtml', 'ng1value', 'ng1setvalue', 'ng1properties', 'ng1property', 'ng1getproperty', 'ng1getattriute', 'ng1setattribute']],
        ['nodeSection4', ['ng1nodes', 'ng1children', 'ng1parents', 'ng1fineelements', 'ng1insertnodes', 'ng1removenodes', 'ng1hierarchy', 'ng1hierarchies', 'ng1modifydom', 'ng1createelements', 'ng1createnodes', 'ng1createdomnodes']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Modules'],
    'data/node-0074.htm',
    [
        ['nodeSection1', ['ng1modules', 'ng1createmodules', 'ng1getmodules', 'ng1moduledependencies']],
        ['nodeSection2', ['ng1values', 'ng1modulevalues', 'ng1constants', 'ng1consts', 'ng1moduleconstants', 'ng1moduleconsts', 'ng1configuremodules', 'ng1moduleconfiguration', 'ng1configurationparameters']],
        ['nodeSection3', ['ng1moduleinitialization', 'ng1moduleinitialisation', 'ng1initmodules', 'ng1initializemodules', 'ng1initializemodules', 'ng1onstartup', 'ng1oninitialization', 'ng1oninitialisation']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Promises'],
    'data/node-0075.htm',
    [
        ['nodeSection1', ['ng1promises', 'ng1deferredwork', 'ng1deferredtask', 'ng1deferredobject', 'ng1$q', 'ng1q', 'ng1resolve', 'ng1reject', 'ng1notify']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['ng1promiseeventhandlers', 'ng1onpromise', 'ng1onresolve', 'ng1onpromiseresolve', 'ng1onreject', 'ng1onpromisereject', 'ng1onnotify', 'ng1onprimisenotify', 'ng1catch', 'ng1catchpromise']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Services'],
    'data/node-0076.htm',
    [
        ['nodeSection1', ['ng1services', 'ng1factory', 'ng1customservices', 'ng1createservices', 'ng1addservices', 'ng1implementservices']],
        ['nodeSection2', ['ng1providerservices']],
        ['nodeSection3', ['ng1decorator', 'ng1decorateservices', 'ng1servicedecorator', 'ng1$provide', 'ng1provide', 'ng1servicewrapper', 'ng1serviceaddon', 'ng1extendservices', 'ng1enhanceservices']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Syntax'],
    'data/node-0077.htm',
    [
        ['nodeSection1', ['ng1anatomy', 'ng1structure', 'ng1applicationstructure']],
        ['nodeSection2', ['ng1syntax', 'ng1examples', 'ng1samples', 'ng1modelviewcontroller', 'ng1model']],
        ['nodeSection3', ['ng1view']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Unit testing'],
    'data/node-0078.htm',
    [
        ['nodeSection1', ['ng1testing', 'ng1tests', 'ng1unittesting', 'ng1unittests', 'ng1jasmine', 'ng1karma', 'ng1testframework']],
        ['nodeSection2', ['ng1jasmine', 'ng1assert', 'ng1assertions', 'ng1expect', 'ng1describe', 'ng1beforeeachtest', 'ng1beforetest', 'ng1it']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['ng1estcontrollers', 'ng1unittestcontrollers']],
        ['nodeSection5', ['ng1mock$http', 'ng1mockhttp', 'ng1simulatehttp', 'ng1simulate$http', 'ng1simulateajax', 'ng1mockajax', '']],
        ['nodeSection6', ['ng1mocktimeout', 'ng1mock$timeout', 'ng1mockinterval', 'ng1mock$interval', 'ng1simulatetimeout', 'ng1simulate$timeout', 'ng1simulateinterval', 'ng1simulate$interval']],
        ['nodeSection7', ['ng1mock$log', 'ng1mocklog', 'ng1simulate$log', 'ng1simulatelog']],
        ['nodeSection8', ['ng1testfilters', 'ng1unittestfilters']],
        ['nodeSection9', ['ng1etsdirectives', 'ng1unittestdirectives']],
        ['nodeSection10', ['ng1estservices', 'ng1unittestservices']]
    ]
);
addNode(
    ['Libraries', 'Angular 1', 'Views and routes'],
    'data/node-0079.htm',
    [
        ['nodeSection1', ['ng1partialviews', 'ng1views', 'ng1include', 'ng1import', 'ng1widgets', 'ng1includefiles', 'ng1includewidgets', 'ng1includepartialviews', 'ng1includefiles']],
        ['nodeSection2', ['ng1routing', 'ng1routes', 'ng1$route', 'ng1routeparams', 'ng1$routeparams', 'ng1routingviews', 'ng1viewrouting']]
    ]
);
addNode(
    ['Libraries', 'Angular 2'],
    'data/node-0080.htm',
    []
);
addNode(
    ['Libraries', 'Angular 2', 'Ajax'],
    'data/node-0081.htm',
    [
        ['nodeSection1', ['ng2ajax', 'ng2xhr', 'ng2xmlhttprequests', 'ng2httpxmlrequests', 'ng2http', 'ng2restservices', 'ng2webservices']],
        ['nodeSection2', ['ng2observables', 'ng2httpheaders']],
        ['nodeSection3', ['ng2promises']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Ajax - Mocking'],
    'data/node-0082.htm',
    [
        ['nodeSection1', ['ng2mockajax', 'ng2mockwebservices', 'ng2mockrestapi', 'ng2mockrestservices', 'ng2mocking', 'ng2webservicesimulator', 'ng2simulatewebservices']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Animations'],
    'data/node-0083.htm',
    [
        ['nodeSection1', ['ng2animations', 'ng2transitions', 'ng2animateelements', 'ng2transitionelements']],
        ['nodeSection2', ['ng2transientstyles']],
        ['nodeSection3', ['ng2animationstates', 'ng2animationdirections', 'ng2transitionstates', 'ng2transitiondirections']],
        ['nodeSection4', ['ng2animationtiming', 'ng2transitiontiming', 'ng2animationdelays', 'ng2easeanimations', 'ng2easing', 'ng2easetransitions', 'ng2delayanimations', 'ng2delaytransitions']],
        ['nodeSection5', ['ng2keyframeanimations', 'ng2animatekeyframes', 'ng2keyframes']],
        ['nodeSection6', ['ng2animationgroups', 'ng2transitiongroups', 'ng2groupanimations', 'ng2grouptransitions']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Components '],
    'data/node-0084.htm',
    [
        ['nodeSection1', ['ng2components', 'ng2componenttemplates', 'ng2templates']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['ng2componentselectors', 'ng2componenttags', 'ng2componentnames', 'ng2pseudoclasses']],
        ['nodeSection4', ['ng2componentinputparameters', 'ng2initialisecomponents', 'ng2initializecomponents', 'ng2componentparameters', 'ng2componentconfiguration', 'ng2conigurecomponents']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Control structures'],
    'data/node-0085.htm',
    [
        ['nodeSection1', ['ng2controlstructures', 'ng2ifelse', 'ng2condiitions', 'ng2conditionalrpocessing', 'ng2switchcases', 'ng2cases', 'ng2ifstatements', 'ng2switchstatements', 'ng2switchcasestatements']],
        ['nodeSection2', ['ng2iterations', 'ng2iteratecollections', 'ng2iteratecontainers', 'ng2iteratearrays', 'ng2forstatement', 'ng2foreach', 'ng2forof', 'ng2loops']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Data binding'],
    'data/node-0086.htm',
    [
        ['nodeSection1', ['ng2databinding', 'ng2binddata']],
        ['nodeSection2', ['ng2attributebinding', 'ng2bindattributes']],
        ['nodeSection3', ['ng2bindstyles', 'ng2bindcss', 'ng2bindclasses', 'ng2inlinestyles', 'ng2styles', 'ng2stylebinding', 'ng2cssbinding']],
        ['nodeSection4', ['ng2symbolicnames', 'ng2templatenames', 'ng2elementnames', 'ng2tagnames', 'ng2nameelements']],
        ['nodeSection5', ['ng2embedhtml', 'ng2encodehtml', 'ng2maskhtml', 'ng2sanitisation', 'ng2sanitisehtml', 'ng2sanitizehtml', 'ng2sanitiseinput', 'ng2sanitizeinput', 'ng2masking', 'ng2encoding']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Dependency injection'],
    'data/node-0087.htm',
    [
        ['nodeSection1', ['ng2di', 'ng2dependencyinjection', 'ng2injectdependencies', 'ng2injectable', 'ng2injectors', 'ng2resolvedpendencies']],
        ['nodeSection2', ['ng2datainjection', 'ng2injectdata', 'ng2injectconfigurationparameters', 'ng2configurationparameters', 'ng2configure', 'ng2injectconfiguration', 'ng2configurationinjection']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Directives'],
    'data/node-0088.htm',
    [
        ['nodeSection1', ['ng2directives', 'ng2attributedirectives', 'ng2implementdirectives', 'ng2definedirectives']],
        ['nodeSection2', ['ng2structuraldirectives']],
        ['nodeSection3', ['ng2directiveinputparameters', 'ng2directiveinputdata']],
        ['nodeSection4', ['ng2directiveevents', 'ng2directivecaptureevents', 'ng2capturedirectiveevents', 'ng2hostlistener']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Events'],
    'data/node-0089.htm',
    [
        ['nodeSection1', ['ng2eventhandlers', 'ng2events', 'ng2eventhandling', 'ng2onclick', 'ng2oninput', 'ng2onkeyup', 'ng2handleevents', 'ng2captureevents']],
        ['nodeSection2', ['ng2onblur', 'ng2onchange', 'ng2onfocus', 'ng2onkeydown', 'ng2onkeyup', 'ng2onkeydown', 'ng2onmouseover', 'ng2onmouseleave', 'ng2mouseover', 'ng2onsubmit']],
        ['nodeSection3', ['ng2customevents', 'ng2raiseevents', 'ng2raisecustomevents', 'ng2outputparameters', 'ng2outputevents', 'ng2eventemitters', 'ng2emitevents']],
        ['nodeSection4', ['ng2lifecycleevents', 'ng2onchanges', 'ng2oninit', 'ng2ondestroy', 'ng2destructor', 'ng2cleanupcoponents', 'ng2hooks', 'ng2interceptors', 'ng2hooklifecycleevents', 'ng2hookevents']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Example'],
    'data/node-0090.htm',
    [
        ['nodeSection1', ['ng2examples', 'ng2sampes', 'ng2demonstrations', 'ng2syntax']],
        ['nodeSection2', ['ng2datamodels']],
        ['nodeSection3', ['ng2mainprograms', 'ng2bootstrapping', 'ng2bootstrapapplications']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['']],
        ['nodeSection8', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Forms'],
    'data/node-0091.htm',
    [
        ['nodeSection1', ['ng2forms']],
        ['nodeSection2', ['ng2validation', 'ng2formvalidation', 'ng2validateforms', 'ng2touched', 'ng2dirty', 'ng2valid', 'ng2invalid', 'ng2pristine', 'ng2untouched']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Modules'],
    'data/node-0092.htm',
    [
        ['nodeSection1', ['ng2modules', 'ng2featuremodules']],
        ['nodeSection2', ['ng2rootmodules']],
        ['nodeSection3', ['ng2coremodules']],
        ['nodeSection4', ['ng2sharedmodules']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Pipes'],
    'data/node-0093.htm',
    [
        ['nodeSection1', ['ng2filters', 'ng2pipes', 'ng2formatdata', 'ng2reformatdata', 'ng2filterdata']],
        ['nodeSection2', ['ng2formatnumbers', 'ng2numberpipes', 'ng2formatdates', 'ng2datepipes', 'ng2dates', 'ng2datetime', 'ng2textfilters', 'ng2formattext', 'ng2touppercase', 'ng2uppercase', 'ng2tolowercase', 'ng2tolower']],
        ['nodeSection3', ['ng2implementpipes', 'ng2implementfilters', 'ng2custompipes', 'ng2customfilters']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Routing'],
    'data/node-0094.htm',
    [
        ['nodeSection1', ['ng2routing', 'ng2router', 'ng2routingtables']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['ng2routes', 'ng2routedefinitions', 'ng2defineroutes', 'ng2defaultroutes', 'ng2404routes', 'ng2routesegments']],
        ['nodeSection4', ['ng2secondaryroutes']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Routing - Guards'],
    'data/node-0095.htm',
    [
        ['nodeSection1', ['ng2routeguards', 'ng2guardroutes', 'ng2activationrouteguards', 'ng2activationguards', 'ng2routehooks', 'ng2routinghooks', 'ng2hookrooting', 'ng2interceptrouting']],
        ['nodeSection2', ['ng2deactivationrouteguards', 'ng2deactivationguards', 'ng2onclose', 'ng2onexit', 'ng2onhide']],
        ['nodeSection3', ['ng2resolverrouteguards', 'ng2resolverguards', 'ng2preloaddata', 'ng2preloadguard', 'ng2preloaderguard', 'ng2preloadrouteguard', 'ng2prefetch']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Routing - Links/redirects'],
    'data/node-0096.htm',
    [
        ['nodeSection1', ['ng2links', 'ng2routerlinks', 'ng2generatelinks', 'ng2generaterouterlinks', 'ng2createlinks', 'ng2createrouterlinks', 'ng2linkgeneration', 'ng2linkgenerator']],
        ['nodeSection2', ['ng2redirects', 'ng2back', 'ng2redirectbrowser']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Routing - Parameters'],
    'data/node-0097.htm',
    [
        ['nodeSection1', ['ng2routeparameters', 'ng2getrouteparameters']],
        ['nodeSection2', ['ng2querystrings', 'ng2anchortags']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Services'],
    'data/node-0098.htm',
    [
        ['nodeSection1', ['ng2services']],
        ['nodeSection2', ['ng2registerservices', 'ng2configureservices']],
        ['nodeSection3', ['ng2servicefactory', 'ng2configureservices', 'ng2serviceconfiguration', 'ng2factory', 'ng2factories']]
    ]
);
addNode(
    ['Libraries', 'Angular 2', 'Setup'],
    'data/node-0099.htm',
    [
        ['nodeSection1', ['ng2projecttemplate', 'ng2quickstartseed', 'ng2setup']],
        ['nodeSection2', ['ng2folderstructures', 'ng2directorystructure', 'ng2folders', 'ng2directories']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap'],
    'data/node-0100.htm',
    []
);
addNode(
    ['Libraries', 'Bootstrap', 'Assorted'],
    'data/node-0101.htm',
    []
);
addNode(
    ['Libraries', 'Bootstrap', 'Assorted', 'Customisation'],
    'data/node-0102.htm',
    [
        ['nodeSection1', ['bscustomise', 'bscustomize', 'bscustomisation', 'bscustomization', 'bspatching', 'bspatchstyles', 'bscustomisestyles', 'bscustomizestyles']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Assorted', 'Show and hide'],
    'data/node-0103.htm',
    [
        ['nodeSection1', ['bsshowing', 'bshide', 'bshiding', 'bsvisibleonly', 'bshiddenelements', 'bshideelements', 'bsshowelements', 'bstexthide', 'bsvisible', 'bsinvisible', 'bsscreenreadersonly', 'bssronly']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Assorted', 'Skeleton'],
    'data/node-0104.htm',
    [
        ['nodeSection1', ['bsexamples', 'bssamples', 'bsskelleton', 'bsskeleton', 'bsframework', 'bsstructure', 'bsprologue']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting'],
    'data/node-0105.htm',
    []
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Alignment'],
    'data/node-0106.htm',
    [
        ['nodeSection1', ['bsalignment', 'bsaligning', 'bsleft', 'bsright', 'bscenter', 'bscentre', 'bsjustify', 'bsjustified', 'bsnowrap', 'bswrapping', 'bslinewrap', 'bslinebreaks', 'bstextalignment', 'bsaligntext']],
        ['nodeSection2', ['bscentering', 'bscenterblocks', 'bscentreblocks']],
        ['nodeSection3', ['bsfloating', 'bsfloatleft', 'bspullleft', 'bsfloatright', 'bspullright']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Containers'],
    'data/node-0107.htm',
    [
        ['nodeSection1', ['bscontainers', 'bsboxes', 'bsblocks', 'bspageheaders', 'bsheaders', 'bsblockquotes', 'bsjombotrons', 'bswells']],
        ['nodeSection2', ['bspanels']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Embeddables'],
    'data/node-0108.htm',
    [
        ['nodeSection1', ['bsembeddables', 'bsembedding', 'bsembedcontent', 'bsembedelements', 'bsemebedresponsive', 'bsresponsiveembedding', 'bsembedmedia', 'bsmultimedia']],
        ['nodeSection2', ['bsvideos']],
        ['nodeSection3', ['bsframes', 'bsiframes']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Grid layout'],
    'data/node-0109.htm',
    [
        ['nodeSection1', ['bsgridsystems', 'bslayouts', 'bsxs', 'bssm', 'bsmd', 'bslg', 'bsscreensizes', 'bsbreakpoints', 'bsgridlayouts', 'bsflows', 'bsflowing', 'bsreflows', 'bsreflowing', 'bsfluidcontainers']],
        ['nodeSection2', ['bsrows', 'bscols', 'bscolumns']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Icons'],
    'data/node-0110.htm',
    [
        ['nodeSection1', ['bsicons', 'bscarets', 'bstriangles', 'bsarrows', 'bsglyphicons', 'bshalflings']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Images'],
    'data/node-0111.htm',
    [
        ['nodeSection1', ['bsimages', 'bsthumbnails', 'bsthumbnailpanels']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Lists'],
    'data/node-0112.htm',
    [
        ['nodeSection1', ['bslists', 'bslistgroups', 'bsitemised', 'bsitemized', 'bsul', 'bsol']],
        ['nodeSection2', ['bsbreadcrumbs', 'bsbreadcrumbnavigations', 'bsbreadcrumbsnavigations', 'bsbreadcrumbsmenus', 'bsbreadcrumbmenus', 'bsunstyledlist', 'bsinlinelists', 'bslistunstyled', 'bslistinline']],
        ['nodeSection3', ['bsdefinitionlists', 'bsdl', 'bshorizontallists', 'bshorizontaldefinitionlists']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Media'],
    'data/node-0113.htm',
    [
        ['nodeSection1', ['bsmediaelements', 'bsmediacontent', 'bsmediabody', 'bsmediaheading']],
        ['nodeSection2', ['bsmediaalignment']],
        ['nodeSection3', ['bsmedialists']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Progress bars'],
    'data/node-0114.htm',
    [
        ['nodeSection1', ['bsprogressbars', 'bsstatusbars', 'bsprogressanimation', 'bsloadingbar']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Tables'],
    'data/node-0115.htm',
    [
        ['nodeSection1', ['bstables']],
        ['nodeSection2', ['bstablecolours', 'bstablecolors', 'bstablecolouring', 'bstablecoloring']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Formatting', 'Text and paragraphs'],
    'data/node-0116.htm',
    [
        ['nodeSection1', ['bstextformatting', 'bsh1', 'bsh2', 'bsh3', 'bsh4', 'bsh5', 'bsh6', 'bssmalltext', 'bsleadtext', 'bsleadparagraph', 'bsparagraphs', 'bslowercase', 'bsuppercase', 'bstolowercase', 'bstouppercase']],
        ['nodeSection2', ['bstextcolor', 'bstextcolour', 'bstextbackgroundcolour', 'bstextbackgroundcolour', 'bsbackgroundcolour', 'bsbackgroundcolor', 'bscolour', 'bscolour']],
        ['nodeSection3', ['bslabels', 'bsbandges']],
        ['nodeSection4', ['bspreformattedtext']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms'],
    'data/node-0117.htm',
    []
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Button groups'],
    'data/node-0118.htm',
    []
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Buttons'],
    'data/node-0119.htm',
    [
        ['nodeSection1', ['bsbuttons', 'bslinkbuttons', 'bssubmitbuttons']],
        ['nodeSection2', ['bsbuttoncolours', 'bsbuttoncolors', 'bsactivebuttons', 'bsdisabledbuttons']],
        ['nodeSection3', ['bsbuttonsizes', 'bsbuttonsizing', 'bsblockbuttons', 'bswidebuttons']],
        ['nodeSection4', ['bsdisabledbuttons']],
        ['nodeSection5', ['bstogglebuttons']],
        ['nodeSection6', ['bsloadingbuttons', 'bsloadbuttons']],
        ['nodeSection7', ['bsbuttonjavascriptapi', 'bsbuttonapi', 'bsbuttonjsapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Checkboxes'],
    'data/node-0120.htm',
    [
        ['nodeSection1', ['bscheckboxes', 'bscheckboxbuttons']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Forms'],
    'data/node-0121.htm',
    [
        ['nodeSection1', ['bsforms', 'bsformgroups', 'bsformlabels', 'bsformfields', 'bsformcontrols', 'bsverticalforms']],
        ['nodeSection2', ['bshorizontalforms', 'bstabularforms', 'bstabforms']],
        ['nodeSection3', ['bsinlineforms']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Input fields'],
    'data/node-0122.htm',
    [
        ['nodeSection1', ['bsinputfields', 'bstextfields', 'bshelptext', 'bshelpblock', 'bsfields', 'bsformfields']],
        ['nodeSection2', ['bssuggestionbox', 'bssuggestions', 'bsinputsuggestions', 'bstypeahead']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Input groups'],
    'data/node-0123.htm',
    [
        ['nodeSection1', ['bsinputgroups', 'bscombinefields', 'bcombineinputfields', 'bscombinedfields', 'bscombinedinputfields', 'bscomplexinputfields', 'bscomplexfields', 'bscompositefields', 'bscompositeinputfields']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Listboxes'],
    'data/node-0124.htm',
    [
        ['nodeSection1', ['bslistboxes', 'bselects', 'bsoptions']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Radio buttons'],
    'data/node-0125.htm',
    [
        ['nodeSection1', ['bsradiobuttons']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Forms', 'Validation'],
    'data/node-0126.htm',
    [
        ['nodeSection1', ['bsvalidations', 'bsformvalidations', 'bsinputvalidations', 'bsformfeedback', 'bsinputfieldvalidations', 'bsfieldvalidations', 'bsinputerrors', 'bsinvalidinput']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive'],
    'data/node-0127.htm',
    []
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Accordion'],
    'data/node-0128.htm',
    [
        ['nodeSection1', ['bsaccordions', 'bsaccordeons', 'bssections', 'bsexpandablesections', 'bscollapsiblesections', 'bscollapsablesections']],
        ['nodeSection2', ['bstoggletext', 'bstexttoggle', 'bstogglelements', 'bselementtoggle', 'bsaccordeonjsapi', 'bsaccordionjsapi']],
        ['nodeSection3', ['bsaccordionapi', 'bsaccordionjavascriptapi', 'bsaccordeonapi', 'bsaccordeonjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Affix'],
    'data/node-0129.htm',
    [
        ['nodeSection1', ['bsaffix', 'bsfixed', 'bsfixposition', 'bspinposition', 'bspositionabsolute', 'bsabsoluteposition', 'bsontop', 'bsfixedontop']],
        ['nodeSection2', ['bsaffixapi', 'bsaffixjsapi', 'bsaffixjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Carousels '],
    'data/node-0130.htm',
    [
        ['nodeSection1', ['bscarousels', 'bscarousells', 'bsslides', 'bsimageslides', 'bsrotators', 'bsimagerotators', 'bsslideimages', 'bsslideshows', 'bsrotateimages']],
        ['nodeSection2', ['bscarouselapi', 'bscarouseljsapi', 'bscarouseljavascriptapi', 'bscarousellapi', 'bscarouselljsapi', 'bscarouselljavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Dialogs'],
    'data/node-0131.htm',
    [
        ['nodeSection1', ['bsidalogs', 'bsdialogues', 'bspopups', 'bsmessageboxes', 'bsmodals', 'bsmsgboxes']],
        ['nodeSection2', ['bsmodalapi', 'bsmodaljsapi', 'bsmodaljavascriptapi', 'bsdialogapi', 'bsdialogjsapi', 'bsdialogjavascriptapi', 'bsdialogueapi', 'bsdialoguejsapi', 'bsdialoguejavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Drop-down'],
    'data/node-0132.htm',
    [
        ['nodeSection1', ['bsdropdownboxes', 'bsdropdowns', 'bsdropdownlists']],
        ['nodeSection2', ['bsdropdownalignment', 'dropdownlistalignment']],
        ['nodeSection3', ['bsdropdownapi', 'bsdropdownjsapi', 'bsdropdownjavascriptapi', 'bsdropdownlistapi', 'bsdropdownlistjsapi', 'bsdropdownlistjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Menus'],
    'data/node-0133.htm',
    [
        ['nodeSection1', ['bsmenus', 'bsnavigation', 'bsnavigationmenus', 'bsmenubars', 'bsdropdownmenus', 'bssitemenus']],
        ['nodeSection2', ['bsmenustyles', 'bsstylemenus', 'bsnavigationstyles', 'bsstylenavigationmenus', 'bsnavigationmenustyles']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Notifications'],
    'data/node-0134.htm',
    [
        ['nodeSection1', ['bsnotifications', 'bsnotificationbars', 'bsalerts', 'bsalertmessages', 'bsnotificationmessages']],
        ['nodeSection2', ['bsnotificationapi', 'bsnotificationjsapi', 'bsnotificationjavascriptapi', 'bsalertapi', 'bsalertjsapi', 'bsalertjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Pagination'],
    'data/node-0135.htm',
    [
        ['nodeSection1', ['bspagination', 'bspages', 'bspagers', 'bspagenavigation', 'bspagenumbers']],
        ['nodeSection2', ['bspreviouspagebuttons', 'bsnextpagebuttons', 'bspreviousbuttons', 'bsnextbuttons', 'bsbackbuttons']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'ScrollSpy'],
    'data/node-0136.htm',
    [
        ['nodeSection1', ['bsscrollspys', 'bsscrollspies', 'bssyncmenus', 'bssynchronisemenus']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['bsscrollspyapi', 'bsscrollspyjsapi', 'bsscrollspyjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Tabs'],
    'data/node-0137.htm',
    [
        ['nodeSection1', ['bstabs', 'bspills', 'bstabbed', 'bstabpanes', 'bstabpanels']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['bstabcontainers', 'bstabwrappers']],
        ['nodeSection4', ['bstabapi', 'bstabjsapi', 'bstabjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Bootstrap', 'Interactive', 'Tooltips'],
    'data/node-0138.htm',
    [
        ['nodeSection1', ['bstooltips', 'bspopovers', 'bspopups']],
        ['nodeSection2', ['bstooltipapi', 'bstooltipjsapi', 'bstooltipjavascriptapi', 'bspopoverapi', 'bspopoverjsapi', 'bspopoverjavascriptapi', 'bspopupapi', 'bspopupjsapi', 'bspopupjavascriptapi']]
    ]
);
addNode(
    ['Libraries', 'Enzyme'],
    'data/node-0139.htm',
    []
);
addNode(
    ['Libraries', 'Enzyme', 'List operations'],
    'data/node-0140.htm',
    [
        ['nodeSection1', ['enzymelists', 'enzymelistoperations', 'enzymegetlistitems', 'enzymegetlisteleemnts', 'enzymelists']],
        ['nodeSection2', ['enzymelistcontains', 'enzymechecklists']],
        ['nodeSection3', ['enzymefilterlists']],
        ['nodeSection4', ['enzymeslicelists', 'enzymesplitlists', 'enzymesplicelists']],
        ['nodeSection5', ['enzymeiteratelists', 'enzymemaplists', 'enzymereducelists', 'enzymetaplists', 'enzymeiterations', 'enzymeiterating']]
    ]
);
addNode(
    ['Libraries', 'Enzyme', 'Scalar operations'],
    'data/node-0141.htm',
    [
        ['nodeSection1', ['enzymeelementoperations', 'enzymeelementchecks', 'enzymescalaroperations', 'enzymescalarchecks&nbsp;', 'enzymescalars']],
        ['nodeSection2', ['enzymeinspectelements', 'enzymeinspectitems', 'enzymetext', 'enzymehtml', 'enzymetotext', 'enzymetohtml', 'enzymedebug', 'enzymeinstance', 'enzymetype']],
        ['nodeSection3', ['enzymestate', 'enzymegetstate', 'enzymesetstate', 'enzymeprops', 'enzymegetprops', 'enzymesetprops', 'enzymekeys', 'enzymegetkeys', 'enzymecontext', 'enzymegetcontext', 'enzymesetcontext']],
        ['nodeSection4', ['enzymerender', 'enzymedive', 'enzymemount', 'enzymeunmount', 'enzymedetach', 'enzymeupdate', 'enzymesimulateevents', 'enzymeevents']]
    ]
);
addNode(
    ['Libraries', 'Enzyme', 'Selectors'],
    'data/node-0142.htm',
    [
        ['nodeSection1', ['enzymeselectors']]
    ]
);
addNode(
    ['Libraries', 'Enzyme', 'Tree operations'],
    'data/node-0143.htm',
    [
        ['nodeSection1', ['enzymetreeoperations', 'enzymehierarchy', 'enzymehierarchies', 'enzymechildren', 'enzymegetchildren', 'enzymerecursiveoperations', 'enzymerecursion', 'enzymetrees']],
        ['nodeSection2', ['enzymegetparents', 'enzymeparents']],
        ['nodeSection3', ['enzymefindchildren', 'enzymefindrecursively', 'enzymesearchchildren', 'enzymesearchrecursively']],
        ['nodeSection4', ['enzymetreechecks', 'enzymerecursivechecks', 'enzymecheckrecursively', 'enzymecontainsany', 'enzymecontainsall', 'enzymecontainselements']]
    ]
);
addNode(
    ['Libraries', 'jOOQ'],
    'data/node-0144.htm',
    []
);
addNode(
    ['Libraries', 'jOOQ', 'Code generation'],
    'data/node-0145.htm',
    [
        ['nodeSection1', ['jooqgeneratefiles', 'jooqgenerator', 'jooqgenerateclasses', 'jooqconfiguration']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'jOOQ', 'DELETE'],
    'data/node-0146.htm',
    [
        ['nodeSection1', ['jooqdeletestatement']]
    ]
);
addNode(
    ['Libraries', 'jOOQ', 'INSERT'],
    'data/node-0147.htm',
    [
        ['nodeSection1', ['jooqinsertstatements', 'jooqinsertrecords']]
    ]
);
addNode(
    ['Libraries', 'jOOQ', 'SELECT'],
    'data/node-0148.htm',
    [
        ['nodeSection1', ['jooqselectstatements', 'jooqselects', 'jooqresults', 'jooqselectrestults', 'jooqfetching']],
        ['nodeSection2', ['jooqdistinct', 'jooqselectdistinct']],
        ['nodeSection3', ['jooqfrom', 'jooqselectfrom']],
        ['nodeSection4', ['jooqjoins', 'jooqinnerjoins', 'jooqouterjoin', 'jooqleftouterjoin', 'jooqnaturaljoin', 'jooqleftsemijons', 'jooqleftantijoins']],
        ['nodeSection5', ['jooqwhere', 'jooqselectwhere', 'jooqand', 'jooqselectand', 'jooqor', 'jooqlogicaloperators']],
        ['nodeSection6', ['jooqgroupby', 'jooqgrouping', 'jooqselectgroupby', 'jooqhaving']],
        ['nodeSection7', ['jooqorderby', 'jooqordering', 'jooqsorting', 'jooqsortby', 'jooqselectorderby', 'jooqselectsortby', 'jooqcases', 'jooqcasewhen', 'jooqcasestements']],
        ['nodeSection8', ['jooqlimits', 'jooqoffsets', 'jooqpagination', 'jooqskip', 'jooqtruncate', 'jooqselectforupdate', 'jooqforupdate', 'jooqcompilerhints', 'jooqhints', 'jooqoptimiserhints', 'jooqoptimizerhints']],
        ['nodeSection9', ['jooqunions', 'jooqintersections', 'jooqminus', 'jooqexcept', 'jooqsetoperations']],
        ['nodeSection10', ['jooqselectfetchone', 'jooqselectfetchany', 'jooqselectfetcharray', 'jooqfetchone', 'jooqfetchany', 'jooqfetcharray', 'jooqtoarrays', 'jooqarrays']]
    ]
);
addNode(
    ['Libraries', 'jOOQ', 'UPDATE'],
    'data/node-0149.htm',
    [
        ['nodeSection1', ['jooqupdatestatement', 'jooqupdaterecords']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'jOOQ', 'Usage'],
    'data/node-0150.htm',
    [
        ['nodeSection1', ['jooqconnections', 'jooqcontexts', 'jooqcreateconnections', 'jooqcreatecontexts', 'jooqusage', 'jooqsyntax', 'jooqusage', 'jooqexamples', 'jooqsamples']],
        ['nodeSection2', ['jooqfieldmaps', 'jooqmapping', 'jooqmapfields', 'jooqfieldmapping']]
    ]
);
addNode(
    ['Libraries', 'jQuery'],
    'data/node-0151.htm',
    []
);
addNode(
    ['Libraries', 'jQuery', 'Ajax'],
    'data/node-0152.htm',
    [
        ['nodeSection1', ['jqajax', 'jqajaxget', 'jqajaxpost', 'jqajaxload', 'jqajaxscripts', 'jqajaxloadscripts', 'jqajaxloadjavascripts', 'jqxhr']],
        ['nodeSection2', ['jqajaxevents', 'jqajaxeventhandlers', 'jqajaxonerror', 'jqajaxerrors', 'jqajaxcompleted', 'jqajaxoncompleted', 'jqajaxfailed', 'jqajaxonfailed']],
        ['nodeSection3', ['jqajaxsetup']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'Animations'],
    'data/node-0153.htm',
    [
        ['nodeSection1', ['jqanimations', 'jqanimate', 'jqshow', 'jqhide', 'jqtoggle', 'jqfadein', 'jqfadeout']],
        ['nodeSection2', ['jqanimationsettings', 'jqanimationconfiguration', 'jqanimationduration', 'jqanimationevents', 'jqanimatineasing']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'Events'],
    'data/node-0154.htm',
    [
        ['nodeSection1', ['jqevents', 'jqeventhandlers', 'jqone', 'jqoff', 'jqtrigger']],
        ['nodeSection2', ['jqclick', 'jqonclick', 'jqhover', 'jqonhover', 'jqmouseevents', 'jqonmouseevents']],
        ['nodeSection3', ['jseventobject', 'jseventproperties']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'Iterations'],
    'data/node-0155.htm',
    [
        ['nodeSection1', ['jqiterations', 'jqloops', 'jqlooparrays', 'jqarraylooping', 'jqarrayloops', 'jqiteratearrays', 'jqarrayiterate', 'jqarraysiterate', 'jqiterating', 'jqarrayiterating', 'jqforeach']],
        ['nodeSection2', ['jqfiltering', 'jqfilterarrays', 'jqarrayfilter', 'jqarraygrep', 'jqgreparray', 'jqfindarrays', 'jqarrayfind']],
        ['nodeSection3', ['jqmapping', 'jqarraymapping', 'jqmaparrays']],
        ['nodeSection4', ['jqarraymerge', 'jqmergearrays', 'jqfindarrays', 'jqfindinarrays', 'jqarrayfind', 'jqarraysearch', 'jqsearcharrays']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'jQuery UI'],
    'data/node-0156.htm',
    [
        ['nodeSection1', ['jqueryui', 'jqdialogs', 'jqmodaldialogs', 'jqdialogmodal', 'jqdialogsmodal']],
        ['nodeSection2', ['jqdatepicker', 'jqdates']],
        ['nodeSection3', ['jqtabs', 'jqtabular', 'jqtabbed']],
        ['nodeSection4', ['jqaccordion', 'jqaccordeon']],
        ['nodeSection5', ['jqdraganddrop']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['jqrectangleselect']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'Modifications'],
    'data/node-0157.htm',
    [
        ['nodeSection1', ['jqmodify', 'jqmodifications', 'jqattributes', 'jqcssstyles', 'jqstyles', 'jqstyling', 'jqclasses', 'jqcssclasses']],
        ['nodeSection2', ['jqinnerhtml', 'jqhtml', 'jqcontents', 'jqtext', 'jqvalue', 'jqinputfields', 'jqdata', 'jqcustomdata', 'jqdataattributes']],
        ['nodeSection3', ['jqnodes', 'jqchildren', 'jqchildnodes', 'jqhierarchies', 'jqappending', 'jqprepending', 'jqinserting', 'jqremove', 'jqremoving', 'jqwrapping', 'jqreplace', 'jqreplacing', 'jqdom', 'jqclone', 'jqcloning']],
        ['nodeSection4', ['jqscrollbars', 'jqscrolling']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'Plugins'],
    'data/node-0158.htm',
    [
        ['nodeSection1', ['jqplugins', 'jqcustomplugins']]
    ]
);
addNode(
    ['Libraries', 'jQuery', 'Selections'],
    'data/node-0159.htm',
    [
        ['nodeSection1', ['jqselections', 'jqselectors']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['']]
    ]
);
addNode(
    ['Libraries', 'Lombok'],
    'data/node-0160.htm',
    []
);
addNode(
    ['Libraries', 'Lombok', 'Assorted'],
    'data/node-0161.htm',
    [
        ['nodeSection1', ['lomboknonnull', 'lomboknotnull', 'lomboknullable', 'lombok@nonnull', 'lombok@notnull', 'lombok@nullable', 'lombokvalidatevalues', 'lombokvalidatedata', 'lombokvalidation']],
        ['nodeSection2', ['lomboklogging', 'lombok@logging']]
    ]
);
addNode(
    ['Libraries', 'Lombok', 'Data classes'],
    'data/node-0162.htm',
    [
        ['nodeSection1', ['lombokconstructors', 'lobmok@constructors', 'lombok@noargsconstructors', 'lomboknoargsconstructors', 'lombokallargsconstructor', 'lombok@allargsconstructors', 'lombok@requiredargsconstructors', 'lombok', 'requiredargsconstructors']],
        ['nodeSection2', ['lombokgetters', 'lombok@getters', 'lomboksetters', 'lombok@setters', 'lombokaccessors', 'lombok@accessors']],
        ['nodeSection3', ['lombokstandardmethods', 'lomboktostring', 'lombok@tostring', 'lombokequals', 'lombok@equals', 'lombokhashcode', 'lombok@hashcode']],
        ['nodeSection4', ['lombokdataclasses', 'lobmok@dataclasses', 'lombok@builder', 'lombokbuilders', 'lombokvalues', 'lombok@values']]
    ]
);
addNode(
    ['Libraries', 'React'],
    'data/node-0163.htm',
    []
);
addNode(
    ['Libraries', 'React', 'Components'],
    'data/node-0164.htm',
    [
        ['nodeSection1', ['rasyntax', 'rasamples', 'raexamples', 'racomponents', 'rarendering', 'racreatecomponents', 'radefinecomponents', 'raimplementcomponents']],
        ['nodeSection2', ['rarendercomponents', 'rarendering']],
        ['nodeSection3', ['rawrappers', 'rawrapcomponents', 'racomponentwrappers', 'raextendcomponents', 'rainheritance', 'racomposition', 'raenhancecomponents', 'ramixins']]
    ]
);
addNode(
    ['Libraries', 'React', 'Events'],
    'data/node-0165.htm',
    [
        ['nodeSection1', ['raeventhandlers', 'raeventhandling', 'rahandleevents', 'raonclick']],
        ['nodeSection2', ['rarefevents', 'rainitialisationevents', 'rainitializationevents', 'raoninitialisation', 'raoninitialization', 'rarefs', 'ragetdomnodes', 'ragetelements', 'ragetnodes']],
        ['nodeSection3', ['raevents', 'raonkeydown', 'raonkeypress', 'raonkeyup', 'raonclick', 'raonselect', 'raonblur', 'raonfocus', 'raonsubmit', 'raonmouseover', 'raonmouseout', 'raondrag', 'raoncopy', 'raonpaste']]
    ]
);
addNode(
    ['Libraries', 'React', 'Forms'],
    'data/node-0166.htm',
    [
        ['nodeSection1', ['raforms', 'ratwowaydatabinding', 'radatabinding', 'rainputs', 'rainputfields', 'ratextareas', 'rabuttons', 'rasubmitbuttons']],
        ['nodeSection2', ['rauncontrolledcomponents', 'radefaultvalues']]
    ]
);
addNode(
    ['Libraries', 'React', 'JSX'],
    'data/node-0167.htm',
    [
        ['nodeSection1', ['rajsx', 'rajsx']],
        ['nodeSection2', ['rajsxattributes', 'raattributes']],
        ['nodeSection3', ['rajsxconditions', 'rajsxifthenelse', 'rajsxifelse', 'rajsxifstatements', 'raconditions', 'raifthenelese', 'raifelse', 'raifstatements', 'raconditionalprocessing', 'rajsxconditionalprocessing']],
        ['nodeSection4', ['raiterations', 'raloops', 'rajsxiterations', 'rajsxloops', 'rajsxiteratearrays', 'raiteratearrays', 'raiteratecontainers', 'rajsxiteratecontainers', 'rajsxarrays', 'raarrays', 'rajsxcontainers', 'racontainers']],
        ['nodeSection5', ['ratranspilations', 'racreateelement', 'rajsxtranspilation', 'rajsxcreateelement']]
    ]
);
addNode(
    ['Libraries', 'React', 'Lifecycle hooks'],
    'data/node-0168.htm',
    [
        ['nodeSection1', ['ralifecyclehooks', 'rahooks', 'racomponentdidmount', 'racomponentwillunmout', 'racomponentupdate', 'raoninitialisation', 'raoninitialization', 'raondispose', 'raondestruct']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'React', 'Properties'],
    'data/node-0169.htm',
    [
        ['nodeSection1', ['raprops', 'raproperties']],
        ['nodeSection2', ['ratypechecking', 'ratypechecks', 'rapropertychecking', 'rapopertychecks', 'rapropchecking', 'rapropchecks', 'ravalidateproperties', 'ravalidateprops', 'racheckproperties', 'racheckprops']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['radefaultvalues', 'rapresets', 'radefaultpropvalues', 'radefaultpropertyvalues', 'radefaultprops', 'radefaults']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Libraries', 'React', 'Setup'],
    'data/node-0170.htm',
    [
        ['nodeSection1', ['rasetup', 'rainstallation', 'rainstallreact', 'rabuildtools']]
    ]
);
addNode(
    ['Libraries', 'React', 'State'],
    'data/node-0171.htm',
    [
        ['nodeSection1', ['rastates', 'rasetstates']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['rachangedetection', 'radetectchanges', 'radetectstatechanges', 'radetectchangedstate', 'ratrackstates', 'ramonitorstates']]
    ]
);
addNode(
    ['Libraries', 'Redux'],
    'data/node-0172.htm',
    []
);
addNode(
    ['Libraries', 'Redux', 'Actions'],
    'data/node-0173.htm',
    [
        ['nodeSection1', ['reduxactions', 'reduxactioncreators', 'reduxactionfactories', 'reduxcreateactions', 'reduxinstantiateactions', 'reduxinstanciateactions']],
        ['nodeSection2', ['reduxdispatchactions', 'reduxdispatching', 'reduxdispatchevents', 'reduxbindactioncreators']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['reduxgenericactioncreators']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Async'],
    'data/node-0174.htm',
    [
        ['nodeSection1', ['reduxasyncactions', 'reduxasynchronousactions', 'reduxajax', 'reduxasynchronousrequests']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Middleware'],
    'data/node-0175.htm',
    [
        ['nodeSection1', ['reduxmiddlewares', 'reduxinterceptors', 'reduxlogging', 'reduxhooks']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'React'],
    'data/node-0176.htm',
    [
        ['nodeSection1', ['raredux', 'reduxreactbindings', 'reduxbindcomponents', 'reduxbindreact', 'reduxconnectfunctions', 'reduxdispatchfunctions']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Reducers'],
    'data/node-0177.htm',
    [
        ['nodeSection1', ['reduxreducers', 'reduxcreatereducers', 'reduxeventhandlers', 'reduxinitialstate', 'reduxinitialisestate', 'reduxintitializestate', 'reduxupdatestate', 'reduxalterstate', 'reduxmodifystate']],
        ['nodeSection2', ['reduxchainreducers', 'reduxreducersequence', 'reduxreducerchain', 'reduxcombinereducers', 'reduxlinkreducers']],
        ['nodeSection3', ['reduxcloneobjects', 'reduxclonestates']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Selectors'],
    'data/node-0178.htm',
    [
        ['nodeSection1', ['reduxselectors', 'reduxcachedselectors', 'reduxcaching', 'reduxmemoizedselectors', 'reduxmemoisedselectors', 'reduxchangedetetction', 'reduxdetectchanges']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Store'],
    'data/node-0179.htm',
    [
        ['nodeSection1', ['reduxstores', 'reduxcreatestores', 'reduxregisterreducers', 'reduxsetupstores', 'reduxgetstatefromstore']],
        ['nodeSection2', ['reduxactionlistener', 'reduxlistener', 'reduxeventlistener', 'reduxlistener', 'reduxhooks', 'reduxnotifications']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Syntax'],
    'data/node-0180.htm',
    [
        ['nodeSection1', ['reduxoverview', 'reduxexamples', 'reduxsamples', 'reduxsyntax', 'reduxsummary', 'reduxarchitecture']],
        ['nodeSection2', ['reduxsetup', 'reduxinstallation', 'reduxpackages']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Testing'],
    'data/node-0181.htm',
    [
        ['nodeSection1', ['reduxtesting', 'reduxtestdata', 'reduxtests', 'reduxmockstore', 'reduxmocking']],
        ['nodeSection2', ['reduxtestrestservices', 'reduxtestajax', 'reduxnock']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Libraries', 'Redux', 'Undo'],
    'data/node-0182.htm',
    [
        ['nodeSection1', ['reduxundo', 'redoxredo', 'reduxhistory']]
    ]
);
addNode(
    ['Libraries', 'Spring Boot'],
    'data/node-0183.htm',
    []
);
addNode(
    ['Libraries', 'Spring Boot', 'Dependency injection'],
    'data/node-0184.htm',
    [
        ['nodeSection1', ['springdi', 'sprinioc', 'springdependencies', 'springdependencyinjection', 'sprininjection', 'sprinautowired', 'springinejctdependencies']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['springrequestinjection', 'springrequestobject', 'springrequestinstance', 'springobjtainobject', 'springobjetaindependency']]
    ]
);
addNode(
    ['Libraries', 'Spring Boot', 'Overview'],
    'data/node-0185.htm',
    [
        ['nodeSection1', ['springframework']],
        ['nodeSection2', ['springapplication', 'springmainapplication', 'springboot']]
    ]
);
addNode(
    ['Libraries', 'Spring Boot', 'REST service'],
    'data/node-0186.htm',
    [
        ['nodeSection1', ['springrestservices', 'springresources', 'springservices', 'springwebservices']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Libraries', 'Spring Boot', 'Testing'],
    'data/node-0187.htm',
    [
        ['nodeSection1', ['springunittests', 'springrunner', 'springtesting']]
    ]
);
addNode(
    ['Programming languages'],
    'data/node-0188.htm',
    []
);
addNode(
    ['Programming languages', 'Apex / Salesforce'],
    'data/node-0189.htm',
    []
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core'],
    'data/node-0190.htm',
    []
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Assorted'],
    'data/node-0191.htm',
    [
        ['nodeSection1', ['apexassertions,', 'apexasserts', 'apexassertequals']],
        ['nodeSection2', ['apexenums', 'apexenumerations']],
        ['nodeSection3', ['apexannotations', 'apexattributes', 'apextags', 'apexdeprecated', 'apexreadonly', 'apexsuppresswarnings']],
        ['nodeSection4', ['apexnamespaces', 'apexschemanamespace', 'apexsystemnamespace']],
        ['nodeSection5', ['apexcomments']],
        ['nodeSection6', ['apexreflections', 'apexdescribe']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Classes'],
    'data/node-0192.htm',
    [
        ['nodeSection1', ['apexsyntax', 'apexclasses', 'apexexamples', 'apexmethods']],
        ['nodeSection2', ['apexconstructor', 'apexinitialisation', 'apexinitialization', 'apexoverloading']],
        ['nodeSection3', ['apexproperties', 'apexautomaticproperties', 'apexmanualproperties', 'apexaccessors', 'apexaccessers', 'apexgetters', 'apexsetters', 'apexgetset']],
        ['nodeSection4', ['apexmodifiers', 'apexglobal', 'apexpublic', 'apexprotected', 'apexprivate', 'apexvirtual', 'apexabstractclasses', 'apexsharing', 'apexwithsharing', 'apexwithoutsharing', 'apextransient']],
        ['nodeSection5', ['apexinheritance', 'apexsuper', 'apexbaseclasses']],
        ['nodeSection6', ['apexinterfaces']],
        ['nodeSection7', ['apextemplates', 'apexgenerics']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Collections'],
    'data/node-0193.htm',
    [
        ['nodeSection1', ['apexarrays', 'apexcontainers', 'apexcollections', 'apexcontainerclasses', 'apexcollectionclasses']],
        ['nodeSection2', ['apexlists', 'apexsortlists']],
        ['nodeSection3', ['apexsets']],
        ['nodeSection4', ['apexmaps', 'apexhashtables', 'apexhashmaps']],
        ['nodeSection5', ['apexiterators', 'apexsortorders', 'apexiterationorders']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Control structures'],
    'data/node-0194.htm',
    [
        ['nodeSection1', ['apexcontrolstructures', 'apexifstatements', 'apexifthenelse', 'apexifelse', 'apexswitchstatement', 'apexconditionalprocessing']],
        ['nodeSection2', ['apexloops', 'apexiterations', 'apexforstatements', 'apexforeach']],
        ['nodeSection3', ['apexwhile']],
        ['nodeSection4', ['apexdowhile']],
        ['nodeSection5', ['apexexcetpions', 'apexexceptionhandling', 'apexerrors', 'apexerrorhandling', 'apextrycatch', 'apexcatchexceptions']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Data tyes'],
    'data/node-0195.htm',
    [
        ['nodeSection1', ['apexdatatypes', 'apexboolean', 'apexinteger', 'apexlong', 'apexdouble', 'apexdecimals', 'apexbigdecimal', 'apexdates', 'apexdatetimes', 'apextime', 'apexstrings', 'apexobjects', 'apexblobs', 'apexids']],
        ['nodeSection2', ['apexvariables']],
        ['nodeSection3', ['apexoperators']],
        ['nodeSection4', ['apexcasting', 'apexinstanceof', 'apextypeof', 'apexformatstrings', 'apexconvert', 'apexconversion']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Deployment'],
    'data/node-0196.htm',
    [
        ['nodeSection1', ['apexdeploment', 'apexdependencies', 'apexapilocks']],
        ['nodeSection2', ['apexchangesets', 'apexexportchangesets', 'apexoutboundchangesets', 'apexpublishchangesets']],
        ['nodeSection3', ['apeximportchangesets', 'apexinboundchangesets']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Core', 'Testing'],
    'data/node-0197.htm',
    [
        ['nodeSection1', ['apextesting', 'apexunittests', 'apexistest', 'apextestsetup', 'apexbeforetest']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'DML'],
    'data/node-0198.htm',
    []
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'DML', 'General'],
    'data/node-0199.htm',
    [
        ['nodeSection1', ['apextransactions', 'apexcommit', 'apexrollback', 'apexsavepoints', 'apexrestore', 'apexrestorepoints']],
        ['nodeSection2', ['apexbulkupdates', 'apexmassupdates', 'apexbulkoperations', 'apexmassoperations', 'apexbatchupdtaes', 'apexbatchoperations']],
        ['nodeSection3', ['apexdatabase']],
        ['nodeSection4', ['apexsqloptions', 'apexqueryoptions', 'apextruncatefields']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'DML', 'INSERT / UPDATE / DELETE'],
    'data/node-0200.htm',
    [
        ['nodeSection1', ['apexinsertstatement', 'apexinsertrecord', 'apexsql', 'apexsoql', 'apexsqlinsert', 'apexsoqlinsert']],
        ['nodeSection2', ['apexupdatestatement', 'apexupdaterecord', 'apexsqlupdate', 'apexsoqlupdate']],
        ['nodeSection3', ['apexupsertstatement', 'apexupsertrecord', 'apexsqlupsert', 'apexsoqulupsert']],
        ['nodeSection4', ['apexmergestatement', 'apexmergerecords', 'apexsqlmege', 'apexsoqlmerge']],
        ['nodeSection5', ['apexdeletestatement', 'apexdeleterecords', 'apexsqldelete', 'apexsoqldelete']],
        ['nodeSection6', ['apexundeletestatement', 'apexundeleterecords', 'apexsqlundelete', 'apexsoqlundelete']],
        ['nodeSection7', ['apexcovertlead', 'apexleads', 'apexsqlconvertleads', 'apexsoqlconvertleads']],
        ['nodeSection8', ['apexrelationships', 'apexjoins', 'apexinnerjoins', 'apexjoinrecords', 'apexrelatedlists', 'apexmasterdetails']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'DML', 'SELECT'],
    'data/node-0201.htm',
    [
        ['nodeSection1', ['apexsql', 'apexsoql', 'apexsosl']],
        ['nodeSection2', ['apexselectstatement', 'apexsqlselect', 'apexsoqlselect']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['apexnestedselects', 'apexsubselects', 'apexsqlnestedselects', 'apexsoqlnestedselects', 'apexsqlsubselects', 'apexsoqlsubselects']],
        ['nodeSection5', ['apexgroupby', 'apexgrouping', 'apexselectgroupby', 'apexsqlgroupby', 'apexsoqlgropby', 'apexsqlgrouping', 'apexsoqlgrouping', 'apexcount', 'apexsqlcount', 'apexsoqlcount', 'apexaggregates', 'apexaggregration', 'apexsqlaggregates', 'apexsoqlaggregates']],
        ['nodeSection6', ['apexselectforupdate', 'apexselectdeleted', 'apexrecyclebin', 'abpexselect', 'recyclebin', 'apexlimit', 'apexselectlimit', 'apexsqllimit', 'apexsoqllimit']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Jobs and &nbsp;services'],
    'data/node-0202.htm',
    []
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Jobs and &nbsp;services', 'Asynchronous'],
    'data/node-0203.htm',
    [
        ['nodeSection1', ['apexasynchronous', 'apexfuturemethods', 'apexthreads', 'apexbackgroundjobs', 'apexbatch', 'apextasks', 'apexjobs']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['apexcronjobs', 'apexchronjobs', 'apextimer', 'apexinterval', 'apexrepeating', 'apexrepeatjobs', 'apexscheduler']],
        ['nodeSection4', ['apexbatch']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Jobs and &nbsp;services', 'Email'],
    'data/node-0204.htm',
    [
        ['nodeSection1', ['apexonemail', 'apexinboundemails', 'apexemails']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Jobs and &nbsp;services', 'REST services'],
    'data/node-0205.htm',
    [
        ['nodeSection1', ['apexrestservices', 'apexwebservices', 'apexpublicapis']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['apexcallouts', 'apexcallwebservices', 'apexcallrestservices', 'apexhttprequest']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Jobs and &nbsp;services', 'Security'],
    'data/node-0206.htm',
    [
        ['nodeSection1', ['apexsecurity', 'apexpermissions', 'apexwithsharing', 'apexwithoutsharing', 'apexpermissionchecking', 'apexcheckpermissions', 'apexacl', 'apexaccesscontrol']],
        ['nodeSection2', ['apexprofiles']]
    ]
);
addNode(
    ['Programming languages', 'Apex / Salesforce', 'Jobs and &nbsp;services', 'Triggers'],
    'data/node-0207.htm',
    [
        ['nodeSection1', ['apextriggers', 'apexondelete', 'apexoninsert', 'apexonupdate', 'apexcreatetriggers']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC'],
    'data/node-0208.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted'],
    'data/node-0209.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Ajax'],
    'data/node-0210.htm',
    [
        ['nodeSection1', ['mvcajax']],
        ['nodeSection2', ['mvcajaxforms']],
        ['nodeSection3', ['mvcajaxcontroller']],
        ['nodeSection4', ['mvcjsonajax', 'mvcajaxjson', 'mvcreturnjson']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Bundling'],
    'data/node-0211.htm',
    [
        ['nodeSection1', ['mvcbundling', 'mvcbundeling', 'mvcbundles', 'mvcbundelling']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['mvcstyles', 'mvcscripts']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Controllers'],
    'data/node-0212.htm',
    [
        ['nodeSection1', ['mvccontrollers', 'mvcactionmethods', 'mvcactions', 'mvcasynchronous', 'mvcasyncawait', 'mvcasyncwait', 'mvctaskparallellibrary', 'mvctpl']],
        ['nodeSection2', ['mvcrequestobject', 'mvcrequestdata', 'mvcformdata', 'mvcformfiles', 'mvcquerystrings', 'mvccookies', 'mvcheaders', 'mvchttpheaders', 'mvcconfigurationparameters']],
        ['nodeSection3', ['mvctempdata', 'mvctemporarydata', 'mvcsessions', 'mvcsessiondata', 'mvcviewbag', 'mvctmpdata', 'mvcsessionstate', 'mvcstoredata', 'mvcstoresessiondata']],
        ['nodeSection4', ['mvcactiontypes', 'mvcjsonresult']],
        ['nodeSection5', ['mvcrenderviews']],
        ['nodeSection6', ['mvcredirection', 'mvcredirecting', 'mvcbrowserredirect', 'mvcredirectbrowser']],
        ['nodeSection7', ['mvchttperror', 'mcvhttpstatuscode', 'mvcsethttpstatuscode', 'mvcsethttperrorcode', 'mvcsetstatuscode', 'mvcseterrorcode', 'mvcfilenotfound', 'mvc404', 'mvc401', 'mvcunauthorized', 'mvcunauthorised']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Dependency injection'],
    'data/node-0213.htm',
    [
        ['nodeSection1', ['mvcdependencyinjection', 'mvcdi', 'mvcninject', 'mvcdependencyresolver', 'mvcinjectdependencies', 'mvcresolvedependencies']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Example'],
    'data/node-0214.htm',
    [
        ['nodeSection1', ['mvcexamples', 'mvcsamples', 'mvcoverviews', 'mvcsummaries', 'mvcsummary']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Folders'],
    'data/node-0215.htm',
    [
        ['nodeSection1', ['mvcfolders', 'mvcfolderstructure', 'mvcstandardfolders', 'mvcdefaultfolders', 'mvcdirectories', 'mvcstandardirectories', 'mvcdefaultdirectories', 'mvcdirectorystructure']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Assorted', 'Web API'],
    'data/node-0216.htm',
    [
        ['nodeSection1', ['mvcwebapi', 'mvcwebapirouting', 'mvcwebapiroutes']],
        ['nodeSection2', ['mvcwebapicontrollers']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Filters'],
    'data/node-0217.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Filters', 'Action and result'],
    'data/node-0218.htm',
    [
        ['nodeSection1', ['mvcactionfilters', 'mvcfilteractions', 'mvcfilteractionmethods', 'mvccontentfilters', 'mvcfiltercontents']],
        ['nodeSection2', ['mvcresultfilter', 'mvcresultsfilter', 'mvcfilteresults']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Filters', 'Authentication'],
    'data/node-0219.htm',
    [
        ['nodeSection1', ['mvcauthorization', 'mvcauthorisation', 'mvcaccesspermissions', 'mvcacls', 'mvcpermissions', 'mvcuserroles', 'mvcroles']],
        ['nodeSection2', ['mvcauthentication', 'mvcauthenticateusers', 'mvcauthenticateclients', 'mvcusermanagement', 'mvcmanageusers']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Filters', 'Error handling'],
    'data/node-0220.htm',
    [
        ['nodeSection1', ['mvcerrorhandling', 'mvcexceptionhandling', 'mvchandleerrors', 'mvchandleexceptions', 'mvcerrorhandler', 'mvcexceptionhandler']],
        ['nodeSection2', ['mvccustomerrorpages', 'mvcerrorpages']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Filters', 'Syntax'],
    'data/node-0221.htm',
    [
        ['nodeSection1', ['mvcfilters', 'mvcapplyfilters', 'mvcaddfilters', 'mvcattachfilters']],
        ['nodeSection2', ['mvcfiltertypes', 'mvcfilterorder', 'mvcfilterpriority', 'mvcfiltersequence']],
        ['nodeSection3', ['mvcinlinefilters', 'mvccontrollerfilters', 'mvcfilteractions', 'mvcfiltermethods', 'mvcfilteractionmethods']],
        ['nodeSection4', ['mvcglobalfilters']],
        ['nodeSection5', ['mvcdisablefilters', 'mvcdeactivatefilters', 'mvcremovefilters', 'mvcoverridefilters', 'mvcdeactivatingfilter']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Model and forms'],
    'data/node-0222.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Model and forms', 'Model binding'],
    'data/node-0223.htm',
    [
        ['nodeSection1', ['mvcdatabinding', 'mvcmodelbinding', 'mvcbinding', 'mvcbinddata', 'mvcbindinputdata', 'mvcbindmodeldata']],
        ['nodeSection2', ['mvcmanualbinding', 'mvcbindondemand', 'mvcbindingondemand', 'mvcupdatemodel', 'mvctryupdatemodel']],
        ['nodeSection3', ['mvcbindingattributes', 'mvcbindingtags']],
        ['nodeSection4', ['mvccustombinders', 'mvccustommodelbinders', 'mvccustomdatabinders']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Model and forms', 'Syntax'],
    'data/node-0224.htm',
    [
        ['nodeSection1', ['mvcforms', 'mvcrazorforms']],
        ['nodeSection2', ['mvcformhelpers', 'mvcbeginform', 'mvcbeginrouteform']],
        ['nodeSection3', ['mvctemplatehelpers', 'mvclabelformodel', 'mvcdisplayformodel', 'mvceditorformodel']],
        ['nodeSection4', ['mvcformfields', 'mvcinputfields', 'mvccheckboxes', 'mvchiddenfields', 'mvcradiotuttons', 'mvctextareas', 'mvctextboxes', 'mvclistboxes', 'mvcdropdownlists', 'mvclistboxes']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['mvccustomformfieldtemplates', 'mvccustomfieldtemplates', 'mvccustomtemplates']],
        ['nodeSection7', ['mvcformdatamodels']],
        ['nodeSection8', ['mvcdatamodelformannotations', 'mvcdatamodelannotations', 'mvcdatamodeltags', 'mvcdisplaynames', 'mvchideproperties', 'mvchidefields', 'mvcuihint', 'mvcdatatype']],
        ['nodeSection9', ['mvcformcontroller', 'mvcprocessforms', 'mvcformactions', 'mvcformactionmethods']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Model and forms', 'Validation'],
    'data/node-0225.htm',
    [
        ['nodeSection1', ['mvcvalidationmessages', 'mvcerrormessages', 'mvcformvalidationmessages', 'mvcformerrormessages', 'mvcvalidationmessage', 'mvcvalidationsummary']],
        ['nodeSection2', ['mvcvalidationerrorstyles', 'mvcstylevalidationerrors', 'mvcvalidationstyles', 'mvcvalidationclasses', 'mvcvalidationcss']],
        ['nodeSection3', ['mvcmodelstate', 'mvcmanualvalidation']],
        ['nodeSection4', ['mvcvalidationrules', 'mvcvalidationcontraints', 'mvcconstraints', 'mvcrequired', 'mvcrangevalidation', 'mvccomparevalidation', 'mvcregexpvalidation', 'mvcregularexpressions']],
        ['nodeSection5', ['mvccustomvalidators', 'mvccustomvalidationattributes', 'mvcvalidationattributes']],
        ['nodeSection6', ['mvcmodelconstraints', 'mvcmodelvalidation', 'mvcvalidatemodel', 'mvcvalidatedatamodel']],
        ['nodeSection7', ['mvcclientsidevalidation', 'mvcclientvalidation', 'mvcjsvalidation', 'mvcjavascriptvalidation', 'mvcunobtrusivevalidation']],
        ['nodeSection8', ['mvcremotevalidationservices', 'mvcasyncvalidionationservicdes', 'mvcasynchronousvalidationservices', 'mvcvalidationwebservice']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Razor views'],
    'data/node-0226.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Razor views', 'Customisation'],
    'data/node-0227.htm',
    [
        ['nodeSection1', ['mvcdefaultviewconfiguration', 'mvcdefaultviews', 'mvcdefaultlayouts', 'mvcdefaultemplates', 'mvcdefaultmasterpages']],
        ['nodeSection2', ['mvcviewlocations', 'mvcviewsearchorder', 'mvcviewfolders', 'mvcviewdirectories']],
        ['nodeSection3', ['mvccustomviewsearchorder', 'mvccustomviewlocations', 'mvccustomviewfolders', 'mvccustomviewdirectories']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Razor views', 'Layouts'],
    'data/node-0228.htm',
    [
        ['nodeSection1', ['mvclayouts', 'mvclayoutpages', 'mvcmasterpages', 'mvctemplates', 'mvctemplatepages', 'mvctemplateviews', 'mvcviewlayout', 'mvcpagelayout']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Razor views', 'Syntax'],
    'data/node-0229.htm',
    [
        ['nodeSection1', ['mvcrazorsyntax', 'mvcmodel', 'mvcrazormodel', 'mvcviewbag']],
        ['nodeSection2', ['mvcforeach', 'mvcloops', 'mvciterations', 'mvciteratecollections', 'mvciteratearrays', 'mvclooparrays', 'mvcloopcollections', 'mvcrazoriterations', 'mvcrazorforeach', 'mvcrazoriteratearrays', 'mvciteratecollections']],
        ['nodeSection3', ['mvcconditionalprocessing', 'mvcconditions', 'mvcifelse', 'mvcelseif', 'mvcrazorifelse', 'mvcrazorelseif']],
        ['nodeSection4', ['mvcswitchcase', 'mvccasestatement', 'mvcswitchstatement', 'mvcswitchcasestatements']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Razor views', 'Widgets'],
    'data/node-0230.htm',
    [
        ['nodeSection1', ['mvcpartialviews', 'mvcwidgets', 'mvcreuseablecomponents', 'mvcreusablecomponents', 'mvcreuseablelayouts', 'mvcreusableviews', 'mvchtmlpartial']],
        ['nodeSection2', ['mvcchildactions', 'mvchtmlaction']],
        ['nodeSection3', ['mvchelpers', 'mvchelpermethods', 'mvcinlinehelpers', 'mvchelperhinline', 'mvchelpersinline', 'mvcdefinehelpers', 'mvcimplementhelpers']],
        ['nodeSection4', ['mvchelperextensions', 'mvchelperextensionmethods']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing'],
    'data/node-0231.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing', 'Areas'],
    'data/node-0232.htm',
    [
        ['nodeSection1', ['mvcareas', 'mvcapplicationareas', 'mvcsegments', 'mvcdomains']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['mvcareafolderstructure', 'mvcareafolders', 'mvcareadirectories', 'mvcareafolders', 'mvcarealocations']],
        ['nodeSection4', ['mvcarearouting', 'mvcarearoutes']],
        ['nodeSection5', ['mvcareaattributerouting', 'mvcareaattributes']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing', 'Custom routers'],
    'data/node-0233.htm',
    [
        ['nodeSection1', ['mvccustomrouting', 'mvccustomroutehandlers']],
        ['nodeSection2', ['mvcrequesthandlers', 'mvccustomrequesthandlers', 'mvchttphandlers', 'mvccustomhttphandlers']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing', 'Generating URLs'],
    'data/node-0234.htm',
    [
        ['nodeSection1', ['mvclinks', 'mvcgeneratelinks', 'mvccreatelinks', 'mvclinkcreator', 'mvcactionlinks', 'mvchtmlactionlinks', 'mvcroutelinks', 'mvchtmlroutelinks', 'mvcgetlinks', 'mvcrenderlinks']],
        ['nodeSection2', ['mvcurls', 'mvcgenerateurls', 'mvcgeturls', 'mvccreateurls', 'mvcurlaction', 'mvcrouteurl', 'mvcurlrouteurl', 'mvcurlcontent', 'mvcontenturl']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing', 'Routing'],
    'data/node-0235.htm',
    [
        ['nodeSection1', ['mvcrouting', 'mvcroutes', 'mvcroutingconfiguration', 'mvcrouteconfiguration', 'mvcconfigureroutes', 'mvcconfigurerouting', 'mvcregisterroutes', 'mvcrouteregistration', 'mvcroutesregistration']],
        ['nodeSection2', ['mvcrouteparameters', 'mvcroutingparameters', 'mvcroutevariables', 'mvcroutingvariables', 'mvcroutesegments', 'mvcroutingsegments']],
        ['nodeSection3', ['mvcroutingconstraints', 'mvcroutevariableconstraints', 'mvcrouteparameterconstraints']],
        ['nodeSection4', ['mvcattributerouting', 'mvcrouteprefix']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing', 'Static content'],
    'data/node-0236.htm',
    [
        ['nodeSection1', ['mvcstaticcontent', 'mvcstaticassets', 'mvcservestaticontent', 'mvcroutestaticcontent']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET MVC', 'Routing', 'Unit testing'],
    'data/node-0237.htm',
    [
        ['nodeSection1', ['mvctesting', 'mvcunittesting', 'mvctests', 'mvcunittests']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['mvcmocking', 'mvcmockhttprequests', 'mvcmockrequests', 'mvcmockhttpresponse', 'mvcmockresponse']],
        ['nodeSection4', ['mvctestroutes']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms'],
    'data/node-0238.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics'],
    'data/node-0239.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Assorted'],
    'data/node-0240.htm',
    [
        ['nodeSection1', ['aspfolders', 'aspdefaultfolders', 'aspstandardfolders']],
        ['nodeSection2', ['aspids', 'aspgenerateids', 'aspidgeneration', 'apsclientidmode', 'aspelementids']],
        ['nodeSection3', ['aspencryption', 'aspencryptconfiguration', 'aspencryptsettings', 'aspconfigencryption', 'aspconfigurationencryption', 'aspsettingencryption']],
        ['nodeSection4', ['asprequestdata', 'asprequestobject', 'aspquerystring']],
        ['nodeSection5', ['aspconfigurationparameters', 'aspsettings', 'aspappsettings']],
        ['nodeSection6', ['aspurlmapping', 'asprouting', 'aspurls', 'aspredirects']],
        ['nodeSection7', ['aspfriendlyurls']],
        ['nodeSection8', ['aspasynchronously', 'aspbackgroundjobs', 'aspasynctimeout', 'aspasynctasks', 'aspasyncjobs']],
        ['nodeSection9', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Caching'],
    'data/node-0241.htm',
    [
        ['nodeSection1', ['aspcaching', 'aspcachepageoutput', 'aspcacheoutput']],
        ['nodeSection2', ['aspcacheusercontrols']],
        ['nodeSection3', ['aspcachedatasources']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['aspcacheobjects']],
        ['nodeSection6', ['aspcachedependencies']],
        ['nodeSection7', ['aspbrowsercache', 'aspnocache', 'asphttpnocache', 'asppragmanocache']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Controls - Ajax'],
    'data/node-0242.htm',
    [
        ['nodeSection1', ['aspscriptmanager', 'aspajaxcontrols']],
        ['nodeSection2', ['aspupdatepanel']],
        ['nodeSection3', ['aspprogressbars', 'aspprogressindicators', 'aspajaxprogressbars', 'aspajaxprogressindicators']],
        ['nodeSection4', ['asptimers', 'asptimeouts', 'aspajaxtimers', 'aspajaxtimeouts', 'aspintervals', 'aspajaxintervals']],
        ['nodeSection5', ['aspbackbutton', 'aspajaxbackutton', 'aspbrowserbackbutton', 'aspajaxbrowserbackbutton']],
        ['nodeSection6', ['apsajaxtoolkit', 'aspajaxcontroltoolkit']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Controls - Containers'],
    'data/node-0243.htm',
    [
        ['nodeSection1', ['aspplaceholder', 'aspcontainercontrols', 'asppanels', 'asppanelcontrols', 'aspmultiviewcontronls', 'aspmultiviews', 'aspwizard', 'aspwizzards']],
        ['nodeSection2', ['aspwizardcontrol', 'aspwizardcontrols', 'aspwizardsteps', 'asptabs']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Controls - Menus'],
    'data/node-0244.htm',
    [
        ['nodeSection1', ['aspsitemaps', 'aspsitemapcontrols', 'aspsitemapnodes']],
        ['nodeSection2', ['aspsitemapdatasources']],
        ['nodeSection3', ['aspmenus', 'aspopupmenus', 'aspsitemenus', 'asppagemenus', 'aspnavigations', 'aspnavigationmenu', 'aspmenunavigation']],
        ['nodeSection4', ['asptreeview', 'asptreecontrols']],
        ['nodeSection5', ['aspbreadcrumbtrail']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Controls - Sever controls'],
    'data/node-0245.htm',
    [
        ['nodeSection1', ['aspservercontrols', 'aspcustomservercontrols', 'aspimplementservercontrols', 'aspimplementcontrols', 'aspcustomcontrols']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['aspcustomcontroljavascript']],
        ['nodeSection4', ['aspcustomcontrolajax']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Controls - User controls'],
    'data/node-0246.htm',
    [
        ['nodeSection1', ['aspusercontrols', 'aspcustomcontrols', 'aspimplementusercontrols']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['aspuseusercontrols', 'aspconsumeusercontrols']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Error handling'],
    'data/node-0247.htm',
    [
        ['nodeSection1', ['aspcustomerrorpages', 'aspcustomerrors', 'asperrors', 'aspexceptions', 'asp404pages']],
        ['nodeSection2', ['asperrorhandlers', 'asperrorhandling', 'aspexceptionhandler', 'aspexcpetionhandling', 'aspglobalerrorhandler', 'aspglobalerrorhandling']],
        ['nodeSection3', ['asplogging', 'asplogmessages', 'asptracing', 'asptracemessages', 'aspdebugging']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'HTTP handlers'],
    'data/node-0248.htm',
    [
        ['nodeSection1', ['asphttphandlers', 'aspimplementhttphandlers', 'asphandlers', 'asphttphandlers', 'aspimplementhandlers', 'aspcustomhandlers']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['aspmodules', 'aspcustommodules', 'aspimpelementmodules', 'asphttpmodules', 'aspcustomhttpmodules', 'aspimplementhttpmodules']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'JavaScript'],
    'data/node-0249.htm',
    [
        ['nodeSection1', ['aspjavascriptlibraries', 'aspincludejavascriptlibraries']],
        ['nodeSection2', ['aspeventhandlers', 'aspjavascripteventhandlers', 'aspjseventhanders']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['aspbundles', 'aspbundling', 'aspscriptbundles', 'aspbundlescripts', 'aspbundlejavascript', 'aspjavascriptbundling']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Lifecycle events'],
    'data/node-0250.htm',
    [
        ['nodeSection1', ['asppagelifecycleevents', 'asplifecycleevents', 'asppreinit', 'asploadcomplete', 'aspprerender', 'asppageevents', 'aspsystemevents']],
        ['nodeSection2', ['aspglobalapplicationclasses']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Localisation'],
    'data/node-0251.htm',
    [
        ['nodeSection1', ['aspinternationalisation', 'aspinternationalization', 'asptranslation', 'aspmultilingual', 'aspcultures', 'aspsetcultures', 'asptranslate', 'asplocalisation', 'asplocalization', 'aspi18n']],
        ['nodeSection2', ['asptextresources', 'asptranslationresources']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Mails'],
    'data/node-0252.htm',
    [
        ['nodeSection1', ['aspmailserverconfiguration', 'aspconfiguremailserver', 'aspmails', 'aspsendmails', 'aspemails', 'aspsendemails', 'aspmailings']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Postbacks and states'],
    'data/node-0253.htm',
    [
        ['nodeSection1', ['asppostbacks', 'aspcrosspagepostbacks']],
        ['nodeSection2', ['asppostbackcrosspage']],
        ['nodeSection3', ['aspcookies', 'aspsetcookies', 'aspgetcookies']],
        ['nodeSection4', ['aspsessions', 'aspusersessions', 'aspsessiondata', 'aspsessionstate']],
        ['nodeSection5', ['asphttpcontext']],
        ['nodeSection6', ['aspapplicationobject', 'aspglobaldata']],
        ['nodeSection7', ['aspviewstates', 'aspenableviewstates', 'aspdisableviewstates']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Syntax'],
    'data/node-0254.htm',
    [
        ['nodeSection1', ['aspwebforms', 'aspexamples', 'aspsamples', 'aspskelettons', 'aspskelletons', 'aspskellettons', 'aspskeletons']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['aspcodebehindfiles', 'aspeventhandlers']],
        ['nodeSection4', ['aspdirectives', 'aspimport', 'aspregister', 'aspassembly', 'aspreference', 'asppage']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'User management'],
    'data/node-0255.htm',
    [
        ['nodeSection1', ['aspusermanagement', 'aspmanageusers', 'aspuseraccounts', 'aspmanageuseracounts', 'aspmaintainusers', 'aspadminstrateusers', 'aspuseradministration']],
        ['nodeSection2', ['aspauthenticationproviders', 'aspconfigureauthenticationproviders', 'aspuserroles', 'asproles']],
        ['nodeSection3', ['asplogincontrols', 'aspchangepasswords', 'asploginstatus']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['asploginview', 'aspuserspecificcontent']],
        ['nodeSection6', ['aspcreateusers', 'aspdeleteusers', 'aspchangepasswords', 'aspcreateroles', 'aspdeleteroles']],
        ['nodeSection7', ['aspwsat', 'aspswat', 'aspadministration']],
        ['nodeSection8', ['aspuserprofiles', 'aspautomaticprofiles']],
        ['nodeSection9', ['aspmanualprofiles', 'aspcreateuserprofiles']],
        ['nodeSection10', ['asppfofilemigration', 'aspmigrateprofiles']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Basics', 'Validation'],
    'data/node-0256.htm',
    [
        ['nodeSection1', ['aspvalidations', 'aspformvalidation', 'aspvalidateforms', 'aspvalidateinput']],
        ['nodeSection2', ['aspvalidators', 'aspvalidatorcontrols']],
        ['nodeSection3', ['asprequiredfields', 'aspmandatoryfields', 'aspcomparevalidator', 'asprangevalidator', 'aspregularexpressionvalidator', 'aspregexvalidator', 'aspregexpvalidator']],
        ['nodeSection4', ['aspisvalid', 'asppageisvalid', 'aspispagevalid', 'aspvalidatepage', 'aspvalidatepostback']],
        ['nodeSection5', ['aspcustomvalidators']],
        ['nodeSection6', ['aspobtrusivevalidation']],
        ['nodeSection7', ['aspunobtrusivevalidation', 'aspjqueryvalidation', 'aspjqueryformvalidation', 'aspjqueryvalidator']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data'],
    'data/node-0257.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Configuration'],
    'data/node-0258.htm',
    [
        ['nodeSection1', ['aspconfiguredatabases', 'aspmysql', 'aspef', 'aspentityframeworks']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Controls - Collections'],
    'data/node-0259.htm',
    [
        ['nodeSection1', ['aspcollections', 'aspcontainers', 'aspdatacontainers', 'aspdatacontrols', 'aspdatacollections']],
        ['nodeSection2', ['asplistboxes']],
        ['nodeSection3', ['aspcheckboxlists', 'asplistcheckboxes']],
        ['nodeSection4', ['aspgridviews', 'asptableviews', 'asptables']],
        ['nodeSection5', ['asprepeaters']],
        ['nodeSection6', ['asplistviews']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Controls - Details'],
    'data/node-0260.htm',
    [
        ['nodeSection1', ['aspdetailsviews', 'aspdatadetailsviews', 'aspdatasetviews']],
        ['nodeSection2', ['aspdetailsviews', 'aspviewdetails']],
        ['nodeSection3', ['aspformviews', 'aspviewforms']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Controls - Fields'],
    'data/node-0261.htm',
    [
        ['nodeSection1', ['aspdatafields', 'aspformfields', 'aspbuttonfields', 'aspcheckboxfields', 'aspcomandfields', 'asphyperlinkfields', 'aspimagefields']],
        ['nodeSection2', ['asptemplatefields', 'aspcustomfields', 'aspcusotmtemplatefields']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Controls - RefValues'],
    'data/node-0262.htm',
    [
        ['nodeSection1', ['aspfieldmapping', 'aspreferencevalues', 'asprefvalues', 'aspreferences']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Controls - Styling'],
    'data/node-0263.htm',
    [
        ['nodeSection1', ['asprowstyle', 'aspstylerows', 'aspformatrows', 'asprowformatting', 'aspformattables', 'asptableformatting', 'aspstyletables', 'asptablestyling']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Data binding'],
    'data/node-0264.htm',
    [
        ['nodeSection1', ['aspdatabinding', 'aspbinddata', 'aspbinddatasource', 'aspdatasourcebinding', 'aspbinding']],
        ['nodeSection2', ['aspeval', 'aspbind']],
        ['nodeSection3', ['aspitem', 'aspbinditem']],
        ['nodeSection4', ['aspxmlbinding', 'aspbindxml', 'aspxpathbinder', 'aspxpath', 'aspxpathselect']],
        ['nodeSection5', ['aspconnectionstrings', 'aspappsettings', 'aspresources', 'aspresourcebinding', 'aspbindresources']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Data sources - Model binding'],
    'data/node-0265.htm',
    [
        ['nodeSection1', ['aspmodelbinding', 'aspdatabinding']],
        ['nodeSection2', ['aspbinddata']],
        ['nodeSection3', ['aspselectrecords', 'aspselectcollections', 'aspsqlselect', 'aspquery', 'aspqueries', 'aspsqlquery', 'aspsqlqueries', 'aspcrud', 'aspsqlcrud']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['aspinsertrecords', 'aspsqlinsertrecords']],
        ['nodeSection6', ['aspupdaterecords', 'aspupdates', 'aspsqlupdates', 'aspsqlupdaterecords']],
        ['nodeSection7', ['aspdeleterecords', 'aspsqldeleterecords']],
        ['nodeSection8', ['']],
        ['nodeSection9', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Data sources - Objects'],
    'data/node-0266.htm',
    [
        ['nodeSection1', ['aspdatamodel', 'aspcustomdatamodel', 'aspimplementdatamodel']],
        ['nodeSection2', ['aspobjectdatasources']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Data sources - SQL'],
    'data/node-0267.htm',
    [
        ['nodeSection1', ['aspsqldatasources', 'aspsqlcontrols']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['aspsqlinjection']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Data', 'Data sources - XML'],
    'data/node-0268.htm',
    [
        ['nodeSection1', ['aspxmldatasource', 'aspxmlcontrols']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'SOA'],
    'data/node-0269.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'SOA', 'SingalR'],
    'data/node-0270.htm',
    [
        ['nodeSection1', ['aspsingalr', 'aspchatapplication', 'aspbroadcasting']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'SOA', 'Web API'],
    'data/node-0271.htm',
    [
        ['nodeSection1', ['aspwebapi', 'asprestfulservices', 'asprestapi', 'asprestfulapi']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'SOA', 'Web services'],
    'data/node-0272.htm',
    [
        ['nodeSection1', ['aspwebmethods', 'aspwebservices', 'aspsoa', 'aspasmx', 'aspsoap', 'asprestfulapi', 'asprestfulservices', 'asprestapi']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'SOA', 'Web sockets'],
    'data/node-0273.htm',
    [
        ['nodeSection1', ['aspwebsockets', 'asprestfulservices', 'asprestfulapi', 'asprestapi', 'asprestservices', 'aspsoa']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Styling'],
    'data/node-0274.htm',
    []
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Styling', 'Base pages'],
    'data/node-0275.htm',
    [
        ['nodeSection1', ['aspbasepages']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Styling', 'Master pages'],
    'data/node-0276.htm',
    [
        ['nodeSection1', ['aspmasterpages', 'asptemplates', 'asptemplatepages', 'asplayouts', 'asplayoutpages']],
        ['nodeSection2', ['aspmasterpageinheritance', 'aspinheritmasterpages', 'aspextendmasterpages']],
        ['nodeSection3', ['aspcontentpages']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['aspbrowserswitch', 'aspbrowserspecificmasterpages']],
        ['nodeSection7', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Styling', 'Responsive design'],
    'data/node-0277.htm',
    [
        ['nodeSection1', ['aspstylesheets']],
        ['nodeSection2', ['aspbrowserswitch', 'aspbrowserspecificstyles', 'aspbrowserspecificstylesheets']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Styling', 'Skins'],
    'data/node-0278.htm',
    [
        ['nodeSection1', ['aspskins', 'aspskinning']]
    ]
);
addNode(
    ['Programming languages', 'ASP.NET Web Forms', 'Styling', 'Themes'],
    'data/node-0279.htm',
    [
        ['nodeSection1', ['aspthemes', 'asptheming', 'aspstylesheetthemes']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['aspdisablehtemes']]
    ]
);
addNode(
    ['Programming languages', 'C#'],
    'data/node-0280.htm',
    []
);
addNode(
    ['Programming languages', 'C#', 'Advanced'],
    'data/node-0281.htm',
    []
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'ADO Connected Layer'],
    'data/node-0282.htm',
    [
        ['nodeSection1', ['csadoconnectedlayer', 'csconnnectedlayer', 'csdatabases', 'csrelationaldatabases']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['csconnectdatabases', 'csconnectdbs', 'csdbconnections', 'csdatabaseconnections', 'csconnecttodatabases', 'csconnecttodbs', 'csconnectionstring']],
        ['nodeSection4', ['cssqlstatements', 'csdbcommands', 'csdatabasecommands', 'cssqlselect', 'cssqlupdate', 'cssqldelete', 'cssqlinsert', 'csinsert', 'csupdate', 'csdelete', 'csselect&nbsp;', 'csdatareader']],
        ['nodeSection5', ['csdbtransactions', 'cscommit', 'cssqlcommit', 'csrollback', 'cssqlrollback', 'csdatabasetransactions']],
        ['nodeSection6', ['csstoredproedures', 'cscallstoredprocedures', 'csdatabaseprocedures', 'csdbprocedures', 'cscalldatabasestoredprocedures', 'cscalldbstoredprocedures']],
        ['nodeSection7', ['csdatabasecaching', 'cscachedatabases', 'cscachetables', 'cscachedatabasetables', 'cscachedbtables', 'csdataset', 'csdatabaseoffline', 'csofflinedatabases']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'ADO Disconnected Layer'],
    'data/node-0283.htm',
    [
        ['nodeSection1', ['csdisconnectedlayer', 'csadodisconnectedlayer', 'csinmemorydatabases', 'csofflinedatabases', 'csofflinedbs', 'csmemorydatabases', 'csmemorydbs']],
        ['nodeSection2', ['csdatatable', 'csdataview', 'csdataset', 'csdatarelation', 'csdatacolumn', 'csadodatatable', 'csadodataview', 'csadodataset', 'csadodatarelation', 'csadodatacolumn']],
        ['nodeSection3', ['csdatarow', 'csadodatarow', 'csofflineselect', 'csdtatablereader', 'csqueryinmemorydatabases', 'csqueryofflinedatabases']],
        ['nodeSection4', ['csexportdatabases', 'csexportdbs', 'csdatabaseexport', 'csdbexport', 'csimportdatabases', 'csimportdbs', 'csdbimports', 'csdatabaseimports']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'ADO Entity Framework'],
    'data/node-0284.htm',
    [
        ['nodeSection1', ['csentityframework', 'csef']],
        ['nodeSection2', ['csconfigureef', 'csconfigureentityframework', 'csefconfiguration', 'csentityframeworkconfiguration']],
        ['nodeSection3', ['csefcodefirst', 'cscodefirst', 'csefdatabasefirst', 'csdatabasefirst', 'csefmodelfirst', 'csmodelfirst', 'csefmodellingapproaches', 'csefapproaches', 'csefmethodologies']],
        ['nodeSection4', ['csefdatamodel', 'csefprimarykeys', 'csefforeignkeys', 'csdbcontext', 'csefdbcontext']],
        ['nodeSection5', ['csefannotations', 'cseftags', 'csefmodelannotations', 'csefmodeltags', 'cseftagmodel', 'csefconfiguremodels', 'csefmodelconfiguration']],
        ['nodeSection6', ['cseffluentapi']],
        ['nodeSection7', ['csefsetupdatabases', 'csefdatabasesetup', 'csefsetupdbs', 'cvefdbsetup', 'csefpopulatedatabases', 'csefpopulatedbs', 'csefinitializedatabases', 'csefinitialisedatabases', 'csefinitializedbs', 'csefinitialisedbs']],
        ['nodeSection8', ['csefusage']],
        ['nodeSection9', ['csefqueries', 'csefquerydatabase', 'csefselectstatements', 'csefselectrecords']],
        ['nodeSection10', ['csefinsertstatements', 'csefinsertrecords']],
        ['nodeSection11', ['csefupdatestatements', 'csefupdaterecords']],
        ['nodeSection12', ['csefdeletestatements', 'csefdeleterecords']],
        ['nodeSection13', ['csefvalidationerrors', 'csefvalidatemodel', 'csefvalidatedata', 'csefvalidatedatamodel']],
        ['nodeSection14', ['csefconcurrencyupdate', 'concurrentupdates']],
        ['nodeSection15', ['cseflazyloading']],
        ['nodeSection16', ['csefmigrations', 'csefdatabasemigrations', 'csefdbmigrations', 'csefmigratedatabases', 'csefmigratedbs']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Assemblies'],
    'data/node-0285.htm',
    [
        ['nodeSection1', ['csassemblies', 'csprivateassemblies', 'cslibs', 'cslibraries', 'csprivatelibraries', 'csprivatelibs', 'csdlls']],
        ['nodeSection2', ['cssharedassemblies', 'cssharedlibraries', 'cssharedlibs', 'csgac', 'csglobalassemblycache']],
        ['nodeSection3', ['csassemblyversioning', 'csassemmblyversions', 'csversioning', 'csassemblydependencies']],
        ['nodeSection4', ['csdynamicassemblies', 'csdynamicloader', 'csloadassemblies', 'csloaddynamicassemblies', 'csloaddll', 'csloaddynamicdll', 'csloadlibrary', 'csloadlibraries', 'csloaddynamiclibrary']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Attributes'],
    'data/node-0286.htm',
    [
        ['nodeSection1', ['csattributes', 'csannotations', 'csdefineattributes', 'cscustomattributes', 'cstags', 'cscustomtags', 'csdefinetags', 'csimplementtags', 'csimplementattributes']],
        ['nodeSection2', ['csapplyattributes', 'csapplytags', 'csapplyannotations']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Dependency injection'],
    'data/node-0287.htm',
    [
        ['nodeSection1', ['csdependencyinjection', 'csdi', 'csninject', 'csdependencyresolver', 'csinjectdependencies', 'csresolvedependencies']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'LINQ'],
    'data/node-0288.htm',
    [
        ['nodeSection1', ['cslinqsyntax', 'cslinqexamples', 'cslinqsamples']],
        ['nodeSection2', ['cslinqsqloperations', 'cslinqjoins', 'cslinqouterjoins', 'cslinqleftouterjoins', 'cslinqgroupby', 'cslinqcartesianproduct', 'cslinqinnerjoin']],
        ['nodeSection3', ['cslinqaggregations', 'cslinqtake', 'cslinqtop', 'cslinqskip', 'cslinqdistinct', 'cslinqunion', 'cslinqcount', 'cslinqmax', 'cslinqmin', 'cslinqsum', 'cslinqaverage']],
        ['nodeSection4', ['cslinqparallel', 'cslinqinparallel', 'cslinqtaskparallellibrary', 'cslinqtpl']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Reflections'],
    'data/node-0289.htm',
    [
        ['nodeSection1', ['csreflections']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['csdynamicfunctioncalls', 'cscalldynamicfunctions']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Serialisation'],
    'data/node-0290.htm',
    [
        ['nodeSection1', ['csserialization', 'csserialisation', 'csobjectserialisation', 'csobjectserialization']],
        ['nodeSection2', ['csserializable', 'csserialisable', 'csserializeable', 'csserialiseable', 'csxmlattribute', 'csnonserialized', 'csconfigureserializationn', 'csconfigureserialisation']],
        ['nodeSection3', ['csserializationformats', 'csserialisationformats', 'csbinaryformatter', 'cssoapformatter', 'csxmlformatter', 'csxmlserializer']],
        ['nodeSection4', ['csserializeobjects', 'csserialiseobjects', 'csdeserialiseobjects', 'csdeserializeobjects']],
        ['nodeSection5', ['csserializationevents', 'csserialisationevents', 'csonserializing', 'csonserialising', 'csondeserialisting', 'csondeserializing']],
        ['nodeSection6', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Thread mechanisms'],
    'data/node-0291.htm',
    [
        ['nodeSection1', ['csthreads', 'csthreadpools', 'cstasks', 'csmultithreading']],
        ['nodeSection2', ['csstartthreads', 'csthreadstarter', 'cscreatethreads']],
        ['nodeSection3', ['csthreadpools']],
        ['nodeSection4', ['cstaskparallellibrary', 'cstpl', 'cstasks', 'csaynctasks', 'csasynchronoustasks']],
        ['nodeSection5', ['csasyncawait', 'csasyncwait', 'cswait', 'csawait']],
        ['nodeSection6', ['csasynchronouseventhandlers', 'csaynceventhandlers', 'csasyncronouscallbacks', 'csasynccallbacks', 'csasyncronousdelegates', 'csasyncdelegates']],
        ['nodeSection7', ['cstimer', 'cstimtout', 'csontimer', 'csontimeout', 'cscronjobs', 'cschronjobs']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'Thread synchronisation'],
    'data/node-0292.htm',
    [
        ['nodeSection1', ['csthreadsynchronisation', 'cssynchronisethreads', 'cssynchronizethreads', 'csthreadsafeassignments']],
        ['nodeSection2', ['csthreadsafecollections']],
        ['nodeSection3', ['csthreadlocking', 'cslockobjects', 'cslockthreads', 'csmonitorenter', 'cssynchronised', 'cssynchronized']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['cstplsynchronisation', 'synchronisetpl', 'cssynchronizetpl', 'cstplbarriers', 'cstplsignalandwait', 'cssignalandwait']],
        ['nodeSection6', ['cscancellationtokens', 'cstplcancellationtokens']],
        ['nodeSection7', ['csthreadnotifications', 'csnotifythreads', 'csautoresetevents']],
        ['nodeSection8', ['csthreadupdatereporting', 'csthreadstatusreporting', 'csthreadprogressreporting', 'csthreadnotifications']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'WCF'],
    'data/node-0293.htm',
    [
        ['nodeSection1', ['cswcf', 'cswebservices', 'cssoap', 'csimplementservices', 'csimplementwebservices', 'csimplementsoap', 'cssoa', 'csservices', 'cswcfservices']],
        ['nodeSection2', ['csdatacontracts', 'csservicecontracts', 'csserviceinterfaces', 'cswcfdatacontracts', 'cswcfservicecontracts']],
        ['nodeSection3', ['cswcfservicehost', 'csservicehost', 'cswcfserver', 'csserver', 'cswcfendpoints', 'csendpoints']],
        ['nodeSection4', ['csserviceclient', 'cswebserviceclient', 'cswcfclient', 'cswcfwebserviceclient', 'cswcfproxy', 'csproxy', 'cscallwebservices', 'cswcfcallwebservices']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Advanced', 'XML'],
    'data/node-0294.htm',
    [
        ['nodeSection1', ['csxmldatabinding', 'csxmlreader', 'csxmlserializer', 'csxmlserialiser']],
        ['nodeSection2', ['csparsexml', 'csxmlparser', 'csloadxmlfiles', 'csreadxmlfiles', 'csparsexmlfiles']],
        ['nodeSection3', ['csxmldom', 'csdomxml', 'csxdocuments', 'csxelements', 'csxcomments', 'csxattributes']],
        ['nodeSection4', ['csxmldocuments', 'csxmlelements', 'csxmlattributes']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes'],
    'data/node-0295.htm',
    []
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Accessors'],
    'data/node-0296.htm',
    [
        ['nodeSection1', ['csproperties', 'csclassproperties', 'csautomaticproperties', 'csaccessors', 'csgetters', 'cssetters']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Anonymous types'],
    'data/node-0297.htm',
    [
        ['nodeSection1', ['csanonymoustypes', 'csanonymousclasses', 'csprojections', 'csanonymousobjects']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Casting'],
    'data/node-0298.htm',
    [
        ['nodeSection1', ['cscasting', 'cscases', 'cstypecasting', 'cstypeconversion', 'cstypecasting', 'cscastobject', 'cscasttype']],
        ['nodeSection2', ['cscastoperator', 'cscustomcasting', 'cscustomtypeconversion']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Constructors'],
    'data/node-0299.htm',
    [
        ['nodeSection1', ['csconstructors', 'cscallconstructors', 'cscallotherconstructors', 'csconstructorchaining', 'csconstructorhierarchy']],
        ['nodeSection2', ['csbaseclassconstructor', 'csinitialisebaseclass', 'csinitializebaseclass', 'csinitbaseclass']],
        ['nodeSection3', ['csnewobject', 'csinstanciateobjects', 'csinstanciateclasses', 'csinstanciation', 'csinstantiateobjects', 'csinstantiateclasses', 'csinstantiation']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Destructors'],
    'data/node-0300.htm',
    [
        ['nodeSection1', ['csdestructors', 'csusing', 'csdisposeobjects', 'csdisposing', 'csdisposable', 'csdisposeable', 'csfinalizeobjects', 'csfinaliseobjects', '']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Enums'],
    'data/node-0301.htm',
    [
        ['nodeSection1', ['csenums', 'csenumerations']],
        ['nodeSection2', ['csenumerate', 'csgetenumvalues', 'csgetenumerationvalues', 'csenumerationvalues', 'csgetenums']],
        ['nodeSection3', ['csparseenums', 'csparseenumerations']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Inheritance and extensions'],
    'data/node-0302.htm',
    [
        ['nodeSection1', ['csinheritance', 'csinherits', 'csextends', 'csextendclasses', 'csinheritclasses']],
        ['nodeSection2', ['csvirtualmethods', 'csvirtualfunctions', 'cspolymorphism']],
        ['nodeSection3', ['csextensionmethods', 'csextensions', 'csextendclasses']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Interfaces'],
    'data/node-0303.htm',
    [
        ['nodeSection1', ['csinterfaces', 'cscreateinterfaces', 'csdefineinterfaces']],
        ['nodeSection2', ['csimplementinterfaces']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Operator overloading'],
    'data/node-0304.htm',
    [
        ['nodeSection1', ['csoperatoroverloading', 'csoverloadoperators']],
        ['nodeSection2', ['csindexingoperatoroverloading', 'csoverloadindexingoperators']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Qualifiers'],
    'data/node-0305.htm',
    [
        ['nodeSection1', ['csmodifiers', 'csqualifiers', 'cspublic', 'csprivate', 'csprotected', 'csinternal', 'csprotectedinternal']],
        ['nodeSection2', ['csconstants', 'csconsts', 'csconstvariables', 'csconstantvariables', 'csreadonlyvariables', 'csconstproperties', 'csconstantproperties', 'csreadonlyproperties']],
        ['nodeSection3', ['csoverridefunctions']],
        ['nodeSection4', ['csstatic', 'csabstractclasses', 'cssealedclasses', 'cspartialclasses']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Standard methods'],
    'data/node-0306.htm',
    [
        ['nodeSection1', ['csequals', 'csgethashcode', 'csstandardmethods', 'csstandardfunctions']],
        ['nodeSection2', ['cscomparable', 'cscomparators', 'cscompareto']],
        ['nodeSection3', ['cscloneobjects', 'cscloneobjects', 'cscloning']],
        ['nodeSection4', ['csenumerators', 'csenumeratecollections', 'csenumerateclasses', 'csenumerating']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Classes', 'Structures'],
    'data/node-0307.htm',
    [
        ['nodeSection1', ['csstructs', 'csstructures', 'csvaluetypes', 'csvalueclasses']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core'],
    'data/node-0308.htm',
    []
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Assorted'],
    'data/node-0309.htm',
    [
        ['nodeSection1', ['csobsolete', 'csmarkobsolete', 'csmarkasobsolete', 'csobsoletefunctions', 'csobsoletemethods', 'csobsoleteclasses', 'cscslcompliant', 'csclscompliance']],
        ['nodeSection2', ['csnamespaces', 'csusing', 'csimportnamespaces', 'csusenamespaces']],
        ['nodeSection3', ['csaliases', 'csaliasing', 'csaliasfunctions']],
        ['nodeSection4', ['csdynamicvariables', 'csuntypedvariables', 'csanonamyousvariables', 'cstypelessvariables']],
        ['nodeSection5', ['csonapplicationend', 'csonapplicationclose', 'csonapplicaationexit', 'csonend', 'csonexit', 'csonclose']],
        ['nodeSection6', ['csregion', 'cscollapsibleregions']],
        ['nodeSection7', ['csconfigurationparameters', 'csappsettings', 'csapplicationsettings', 'csconfigureapplicationparameters', 'csconfigureparameters', 'csconfiguration']],
        ['nodeSection8', ['cslazyobjectinitialisation', 'cslazyobjectinitialization', 'cslazyinitialisation', 'cslazyintitialization']],
        ['nodeSection9', ['csgetvariablenames', 'csgetclassnames', 'csgetfunctionnames', 'csgetmethodnames']],
        ['nodeSection10', ['csnamingconventions']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Collections'],
    'data/node-0310.htm',
    [
        ['nodeSection1', ['csarrays', 'csinitialisearrays', 'csinitializearrays']],
        ['nodeSection2', ['cscollections', 'cscollationclasses', 'cscontainers', 'cscontainerclasses', 'cslists', 'csbitarrays', 'cshashtables', 'csqueues', 'csstacks', 'cssets', 'cslinkedlists', 'csdictionaries']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Comments'],
    'data/node-0311.htm',
    [
        ['nodeSection1', ['cscomments', 'csdocumentation', 'csjavadocs']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['csdocumentationtags', 'csjavadoctags', 'csjavadoccommands', 'csdocumentationcommands']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Control flow'],
    'data/node-0312.htm',
    [
        ['nodeSection1', ['cscontrolstructures', 'csloops', 'cslooping', 'csiterate', 'csiterating', 'csiteration', 'csfor', 'cswhile', 'csdowhile']],
        ['nodeSection2', ['csiteratecollections', 'csiteratecontainers', 'csloopcollections', 'csloopcontainers']],
        ['nodeSection3', ['csconditionalprocessing', 'csifelse', 'cselseif']],
        ['nodeSection4', ['csswitchcase', 'cscase']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Data types'],
    'data/node-0313.htm',
    [
        ['nodeSection1', ['csdatatypes', 'csbyte', 'csshort', 'csint', 'cslong', 'csfloat', 'csdouble', 'csdecimal', 'csboolean', 'cscharacters', 'csvar']],
        ['nodeSection2', ['csdynamicobjects', 'csdynamicvariables']],
        ['nodeSection3', ['csdates', 'csdatetimes', 'cstimes', 'csparsedate', 'csformatdate']],
        ['nodeSection4', ['csmaxint', 'csminint']],
        ['nodeSection5', ['csoverflows', 'cschecked', 'csunchecked']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Debugging'],
    'data/node-0314.htm',
    [
        ['nodeSection1', ['csifdebug', 'csonedebugonly', 'csdebugging', 'csdebugger', 'csdebugonly']],
        ['nodeSection2', ['csassertions', 'csasserting', 'csdebugmessages', 'cstracemassages', 'cslogmessages', 'cslogtracemessages', 'cslogdebugmessages']],
        ['nodeSection3', ['cstracelisteners', 'cslogfiles']],
        ['nodeSection4', ['cstraceswitches']],
        ['nodeSection5', ['csdebuggerannotations', 'csdebuggerattributes', 'csdebuggertags']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Delegates'],
    'data/node-0315.htm',
    [
        ['nodeSection1', ['csdelegates', 'cscallbacks', 'cscallbackfunctions', 'cscallbackmethods']],
        ['nodeSection2', ['csactiontemplate', 'csactiondelegate', 'csfunctemplate', 'csfuncdelegate']],
        ['nodeSection3', ['cseventhandlers', 'csonevent', 'csaddeventlistener', 'cseventlistener', 'csemitevents', 'cssendevents', 'cstriggerevents']],
        ['nodeSection4', ['cslambdaexpressions', 'csinlinefunctions']],
        ['nodeSection5', ['cseventargs', 'cscustomeventargs']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Exceptions'],
    'data/node-0316.htm',
    [
        ['nodeSection1', ['csexceptionhandling', 'cserrorhandling', 'csexceptions', 'cstrycatchfinally', 'cscatchfinally', 'cscatchexceptions', 'csfinally', 'csthrowexceptions', 'csraiseexceptions']],
        ['nodeSection2', ['cscustomexceptions', 'csdefineexceptions', 'csimplementexceptions', 'csinheritexceptions']],
        ['nodeSection3', ['csexceptionhierarchy', 'csexceptionclasshierarchy', 'csexceptionclasses']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Files and streams'],
    'data/node-0317.htm',
    [
        ['nodeSection1', ['csfilesystem', 'csbrowsefilesystem', 'csbrowsefiles', 'csfiles', 'csdirectories', 'cspaths', 'csfileinfo', 'csdirectoryinfo', 'csdrives', 'csdriveinfo']],
        ['nodeSection2', ['csreadfiles', 'cswritefiles', 'csfileoperations', 'csio', 'cssavefiles', 'cscreatefiles']],
        ['nodeSection3', ['csstreamclasses', 'csstreams', 'csfilestreams', 'cszipstreams', 'csgzipstreams', 'csstreamwriter', 'csstreamreader', 'csreadstreams', 'cswritestreams', 'csbufferedstreams', 'csmemorystreams']],
        ['nodeSection4', ['csclosestreams', 'csdisposestreams']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Generics'],
    'data/node-0318.htm',
    [
        ['nodeSection1', ['csgenerics', 'csgenericclasses', 'cstemplates', 'cstemplateclasses', '']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Operators'],
    'data/node-0319.htm',
    [
        ['nodeSection1', ['csoperators', 'cs?operator', 'cs??operator']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Parameters'],
    'data/node-0320.htm',
    [
        ['nodeSection1', ['csoutputparameters', 'csparameters', 'csfunctionparameters', 'csmethodparameters']],
        ['nodeSection2', ['csreferenceparameters', 'cscallbyreference']],
        ['nodeSection3', ['csvargs', 'csvariableargumentlist', 'csvariableargumentslist', 'csvariablearguments', 'csvariableparameters', 'csvariableparameterlist', 'csvariableparameterslist']],
        ['nodeSection4', ['csoptionalparameters', 'csnamedparameters', 'csdefaultparameters']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Strings'],
    'data/node-0321.htm',
    [
        ['nodeSection1', ['csstrings', 'csprint', 'csconsolewriteline', 'cswriteline', 'csprintf', 'cssprintf', 'csformatstring']],
        ['nodeSection2', ['csstringbuilders']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['csparsestrings', 'csparsenumbers', 'csnumbertostrings', 'csnumberstostrings', 'csnumber2strings', 'csnumbers2strings', 'cstryparse', 'cstonumber']],
        ['nodeSection5', ['csregularexpressions', 'csregexp']],
        ['nodeSection6', ['csisletter', 'csisdigit', 'csisletterordigit', 'csispunctuation', 'csiswhitespace']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'Core', 'Testing'],
    'data/node-0322.htm',
    [
        ['nodeSection1', ['cstests', 'cstesting', 'csunittests', 'csunittesting']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['cstestclasses', 'cstestmethods', 'csinitialisetests', 'csinitialiseunittests', 'csinitializetests', 'csinitializeunittests', 'cstestcleanup', 'csunittestcleanup', 'cscleanuptests', 'cscleanupunittests']],
        ['nodeSection4', ['csmocking', 'csmoq', 'cssimulators', 'cssimulateclasses']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF'],
    'data/node-0323.htm',
    []
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Animations'],
    'data/node-0324.htm',
    [
        ['nodeSection1', ['', 'csanimations', 'csanimateproperty', 'csanimateproperties', 'cspropertyanimation']],
        ['nodeSection2', ['csanimatetransformations', 'cstransformationanimation']],
        ['nodeSection3', ['csxamlanimations', 'csanimatexaml']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Assorted'],
    'data/node-0325.htm',
    [
        ['nodeSection1', ['csapplicationconfiguration', 'csxamlconfiguration', 'csxamlconfigurationproperties', 'csxamlconfigproperties']],
        ['nodeSection2', ['csdynamicxaml', 'csloaddynamicxaml', 'csloadxamldynamically']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Code only'],
    'data/node-0326.htm',
    [
        ['nodeSection1', ['cswpf', 'cscodeonlywpf', 'cscodewpf']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Commands'],
    'data/node-0327.htm',
    [
        ['nodeSection1', ['cscommands', 'csdeclarecommands', 'csdefinecommands', 'csxamlcommands']],
        ['nodeSection2', ['cscustomcommands', 'csimplementcustomcommands', 'csimplementcommands']],
        ['nodeSection3', ['csapplicationcommands', 'cscopy', 'cspaste', 'cscontextmenu', 'cscut', 'cshelp', 'cseditingcommands', 'csnavigationcommands', 'csmediacommands']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Data binding (MVVM)'],
    'data/node-0328.htm',
    [
        ['nodeSection1', ['csmvvm', 'csmvc', 'csviewmodel', 'csmodel', 'csmodelbinding', 'csobjectbinding', 'csdatabinding']],
        ['nodeSection2', ['csxamldatabinding', 'csxamlobjectbinding', 'csxamlmodelbinding']],
        ['nodeSection3', ['csobservablecollections']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Data binding (Properties)'],
    'data/node-0329.htm',
    [
        ['nodeSection1', ['cspropertybinding', 'csxamlpropertybinding']],
        ['nodeSection2', ['csdependencyproperties', 'csxamldependencyproperties', 'csdefinedependencyproperties', 'csregisterdependencyproperties']],
        ['nodeSection3', ['cscollectionbinding', 'csbindcollations', 'cscontainerbinding', 'csbindcontainers', 'csxamlcollectionbinding', 'csxamlbindcollections']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Dialogs'],
    'data/node-0330.htm',
    [
        ['nodeSection1', ['csdialogs', 'csxamldialogs', 'csmessageboxes', 'csxamlmessageboxes', 'csstandarddialogs', 'csdialogues', 'csxamldialogues']],
        ['nodeSection2', ['csopenfiledialogs', 'csopenfiledialogues', 'csxamlopenfiledialogs', 'csxamlopenfiledialogues']],
        ['nodeSection3', ['cssavefiledialogs', 'cssavefiledialogues', 'csxamlsavefiledialogs', 'csxamlsavefiledialogues']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Events'],
    'data/node-0331.htm',
    [
        ['nodeSection1', ['csxamlevents', 'csxamleventhandling', 'csxamleventbubbeling', 'csxamleventbubbling', 'cseventbubbling', 'cseventbubbeling']],
        ['nodeSection2', ['csxamleventhandlers', 'csonkeypress', 'csonkeydown', 'csonkeyup', 'csonmouseclick', 'csondoubleclick', 'csondblclick', 'csonmousedown', 'csonmouseover']],
        ['nodeSection3', ['cxamleventhandlers', 'csxamlhandleevents']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Layout manager'],
    'data/node-0332.htm',
    [
        ['nodeSection1', ['cslayoutmanagers', 'csxamllayoutmanagers', 'cscanvas', 'cswrappanel', 'csgrid', 'csdockpanel', 'csviewbox', 'csscrollviewer', 'csscrollbar', 'cxamlcanvas', 'csxamlwrappanel', 'csxamlgrid', 'csxamlstackpanel']],
        ['nodeSection2', ['csxamltables', 'cstables', 'cstableviews', 'csxamltableviews']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Localisation'],
    'data/node-0333.htm',
    [
        ['nodeSection1', ['csi18n', 'csinternationalisation', 'csinternationalization', 'cslocalisation', 'cslocalization', 'cstranslations', 'cstranslatemessages', 'csmultilingual']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['cscultures', 'cscultureinfo', 'csuiculture', 'csswitchculture', 'csswitchuiculture', 'cschangeculture', 'cschangeuiculture']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Rendering'],
    'data/node-0334.htm',
    [
        ['nodeSection1', ['cspainting', 'csxamlpainting', 'cspaintshapes', 'csgeometries', 'csdrawing', 'csdrawshapes', 'csdrawimages', 'cspaintimages', 'csrenderimages']],
        ['nodeSection2', ['csxamlshapes', 'csshapes', 'csdrawshapes', 'cspaintshapes', 'csrendershapes']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['cstransformshapes', 'cstransformations', 'cstransformingshapes', 'csshapetranformations']],
        ['nodeSection5', ['csgeometries', 'csxamlgeometries', 'csdrawgeometries', 'cspaintgeometries']],
        ['nodeSection6', ['csdrawcomplexshapes', 'cscomplexshapes', 'cspaintcomplexshapes']],
        ['nodeSection7', ['csdrawkvectorgraphics', 'csvectorgraphics', 'csloadimages', 'csloadimagefiles', 'csshowimages', 'csshowimagefiles']],
        ['nodeSection8', ['csvisuallayer', 'csdrawingcontext']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Resources'],
    'data/node-0335.htm',
    [
        ['nodeSection1', ['csresources', 'csassets', 'csxamlresources', 'csxamlassets', 'csincludeimages', 'csincludeimagesfiles', 'cslinkimages', 'cslinkimagefiles']],
        ['nodeSection2', ['csembedresources', 'csembedassets']],
        ['nodeSection3', ['csxamlresources', 'csxamltemplates']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'C#', 'WPF', 'Styles'],
    'data/node-0336.htm',
    [
        ['nodeSection1', ['cslogicalresources', 'cstemplatestyles', 'csxamllogicalresources']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['csinheritstyles', 'csstyleinheritance']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['cscontextspecificstyles']],
        ['nodeSection6', ['csanimationstyles']]
    ]
);
addNode(
    ['Programming languages', 'Closure / Soy'],
    'data/node-0337.htm',
    []
);
addNode(
    ['Programming languages', 'Closure / Soy', 'Assorted'],
    'data/node-0338.htm',
    [
        ['nodeSection1', ['soyoutput', 'soyprintvariables', 'soyprintvalues', 'soypipes', 'soyfilters', 'soyfilterstrings', 'soytruncatestrings']],
        ['nodeSection2', ['soycomments', 'soyinlinecomments', 'soymultilinecomments']],
        ['nodeSection3', ['soyoperators', 'soyands', 'soyors', 'soynots', 'soylogicaloperators', 'soyunaryoperators']],
        ['nodeSection4', ['soyspecialcharacters', 'soyescaping', 'soyescapesequences', 'soyspaces', 'soynbsps', 'soytabs', 'soynewlines', 'soylinebreaks', 'soyliterals', 'soymasking', 'soyescaping']]
    ]
);
addNode(
    ['Programming languages', 'Closure / Soy', 'Control structures'],
    'data/node-0339.htm',
    [
        ['nodeSection1', ['soycontrolstructures', 'soyconditionalprocessing', 'soyifthenelse', 'soyif', 'else', 'soyelseif', 'soyelse', 'soyifstatements']],
        ['nodeSection2', ['soyswitchcase', 'soycase', 'soyswitchstatements', 'soyswitchcasestatements', 'soycasestatements']],
        ['nodeSection3', ['soyloops', 'soyiterations', 'soyforloops', 'soyforstatements']],
        ['nodeSection4', ['soyforeachloops', 'soyforeachiterations', 'soyisfirst', 'soyislast', 'soyindex', 'soyiteratecollections', 'soyiteratecontainer', 'soyiteratearrays', 'soylooparrays', 'soyloopcontainers', 'soyloopcollections']]
    ]
);
addNode(
    ['Programming languages', 'Closure / Soy', 'Functions'],
    'data/node-0340.htm',
    [
        ['nodeSection1', ['soyfunctions', 'soybuiltinfunctions', 'soystringfunctions', 'soylength', 'soyround', 'soyfloor', 'soyceiling', 'soymin', 'soymax', 'soymaths', 'soycalculations']]
    ]
);
addNode(
    ['Programming languages', 'Closure / Soy', 'Syntax'],
    'data/node-0341.htm',
    [
        ['nodeSection1', ['soysyntax', 'soyexamples', 'soysamples']],
        ['nodeSection2', ['soyrendertemplates', 'soyrendering', 'soyjavainterfaces']],
        ['nodeSection3', ['soyparseinfogenerator', 'soysymbolicnames']]
    ]
);
addNode(
    ['Programming languages', 'Closure / Soy', 'Templates'],
    'data/node-0342.htm',
    [
        ['nodeSection1', ['soytemplates', 'soydefinetemplates', 'soycreatetemplates', 'soywidgets', 'soyinlinetemplates', 'soyinlining']],
        ['nodeSection2', ['soyparameters', 'soypassparameters', 'soytemplateparameters', 'soydeclareparameters', 'soyrequireparameters', 'soyparams']],
        ['nodeSection3', ['soycalltemplates', 'soyinlcudetemplates', 'soyembedtemplates', 'soyusetemplates', 'soyinlucdewidgets', 'soyembedtemplates']]
    ]
);
addNode(
    ['Programming languages', 'Closure / Soy', 'Variables'],
    'data/node-0343.htm',
    [
        ['nodeSection1', ['soydatatypes', 'soyanys', 'soynulls', 'soybooleans', 'soyintegers', 'soyfloats', 'soynumbers', 'soystrings', 'soyhtml', 'soyuris', 'soyurls', 'soyjs', 'soylists', 'soymaps', 'soyobjects', 'soyarrays', 'soyuniontypes']],
        ['nodeSection2', ['soyliterals', 'soyconstants', 'soyvalues']],
        ['nodeSection3', ['soyvariables', 'soylocalvariables', 'soydefinevariables', 'soydeclarevariables']],
        ['nodeSection4', ['soyaccessproperties', 'soyproperties', 'soyfields']],
        ['nodeSection5', ['soyglobaldata', 'soyinjecteddata', 'soyinjectdata', 'soyinjecting', 'soyinjection']]
    ]
);
addNode(
    ['Programming languages', 'CSS'],
    'data/node-0344.htm',
    []
);
addNode(
    ['Programming languages', 'CSS', 'Formatting'],
    'data/node-0345.htm',
    []
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Animations'],
    'data/node-0346.htm',
    [
        ['nodeSection1', ['csstransitions', 'cssanimations', 'cssease']],
        ['nodeSection2', ['csskeyframes', 'csskeyframeanimations', 'csskeyframetransitions']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Backgounds'],
    'data/node-0347.htm',
    [
        ['nodeSection1', ['cssbackgrounds', 'cssbackgroundcolours', 'cssbackgroundcolors', 'cssbackgroundimages', 'cssblendmodes', 'cssbackgroundblendmodes', 'cssoverlay', 'cssscreen']],
        ['nodeSection2', ['cssgradients', 'csslineargradients', 'cssradialgradients', 'cssrepeatinggradients', 'cssbackgroundgradients', 'csscirculargradients', 'csscirclegradients']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Borders'],
    'data/node-0348.htm',
    [
        ['nodeSection1', ['cssborders', 'cssoutlines', 'cssroundborders', 'cssroundedges']],
        ['nodeSection2', ['cssborderimages', 'cssimageborders']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Colours'],
    'data/node-0349.htm',
    [
        ['nodeSection1', ['csscolours', 'cssrgba', 'csshsla', 'csscolors', 'csshexcolours', 'csshexcolors', 'csshexadecimalcolors', 'csshexadecimalcolours', 'cssnamedcolours', 'cssnamedcolors']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Lists'],
    'data/node-0350.htm',
    [
        ['nodeSection1', ['csslists', 'cssol', 'cssul', 'cssil', 'cssorderedlists', 'cssunorderedlists', 'cssunsortedlists', 'csssortedlists', 'csorderedlists', 'csslistitems', 'csslistelements']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Menus'],
    'data/node-0351.htm',
    [
        ['nodeSection1', ['cssmenus', 'cssdropdownmenus', 'cssinteractivemenus']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Shadows'],
    'data/node-0352.htm',
    [
        ['nodeSection1', ['cssshadows', 'cssboxshadows', 'cssdropshadows', 'csscastshadows']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Tables'],
    'data/node-0353.htm',
    [
        ['nodeSection1', ['csstables', 'csstablerows', 'csstablecells', 'csscells', 'csstableborders', 'csstablecaptions', 'csstablelayout', 'csstablealignment', 'csscellalignment']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Text'],
    'data/node-0354.htm',
    [
        ['nodeSection1', ['csstext', 'csstextcolor', 'cssfontcolor', 'csstextshadow', 'cssunterlined', 'cssstrikethrough', 'cssstrikedthrough', 'cssfontsize', 'csstextsize', 'csslineheight', 'csstextdecoration']],
        ['nodeSection2', ['csstexttransformatinos', 'cssuppercase', 'csstouppercase', 'csslowercase', 'csstolowercase', 'csssmallcaps', 'csscapitalize', 'csscapitalise']],
        ['nodeSection3', ['cssfonts', 'cssserif', 'csssansserif', 'cssmonospace', 'cssfonttypes', 'csspredefinedfonts', 'cssbuiltinfonts']],
        ['nodeSection4', ['csstextalignments', 'csstextdirections', 'cssdirections', 'csstextindent', 'csstextintent', 'csstextintend', 'cssintend', 'cssintent', 'cssindend', 'cssintend', 'cssspacing', 'csswordspacing', 'cssletterspacing']],
        ['nodeSection5', ['csswordwrapping', 'csswarpwords', 'csswhitepsace', 'csscollapsewhitespaces', 'csslinewrapping', 'csswraplines', 'csswrapping']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Transformations'],
    'data/node-0355.htm',
    [
        ['nodeSection1', ['csstransformations2d', 'csstransform2d', 'css2dtransformations', 'cssrotate', 'cssrotating', 'csstranslate', 'csstranslating', 'cssshift', 'cssshifting', 'cssscale', 'cssscaling', 'cssskew', 'cssskewing']],
        ['nodeSection2', ['css3dprojectionarea', 'css3dprojectionspace', 'css3dperspective', 'cssperspective', 'cssprojectionperspective', 'css3dspace']],
        ['nodeSection3', ['css3dtransformations', 'csstransform3d', 'csstransformation3d']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Formatting', 'Web fonts'],
    'data/node-0356.htm',
    [
        ['nodeSection1', ['csswebfonts', 'cssfontfaces', 'cssimportwebfonts', 'cssdeclarewebfonts', 'cssimportwebfonts']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow'],
    'data/node-0357.htm',
    []
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Alignment'],
    'data/node-0358.htm',
    [
        ['nodeSection1', ['cssalignment', 'cssalignelements', 'cssverticalalignment', 'csshorizontalalignment', 'csscentering', 'csscenterelements', 'csscentring', 'csscentreelements']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Flexbox'],
    'data/node-0359.htm',
    [
        ['nodeSection1', ['cssflexboxes', 'cssflexibleboxes', 'cssflexboxcontainers', 'cssflexboxwrappers']],
        ['nodeSection2', ['cssflexboxchildren', 'cssflexboxitems', 'cssflexboxelements']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Floating'],
    'data/node-0360.htm',
    [
        ['nodeSection1', ['cssfloating', 'cssfloats', 'cssclearfix', 'cssmicroclearfixhack']],
        ['nodeSection2', ['csszindex', 'csstackingorder', 'csstackingpriority', 'cssbackwards', 'csstoback', 'csstotheback', 'cssforwards', 'cssfront', 'csstofront', 'csstothefront']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Grid layout'],
    'data/node-0361.htm',
    [
        ['nodeSection1', ['cssgridlayout', 'cssgridcontainer', 'cssgridlayoutcontainer', 'cssgridwrapper', 'cssgridlayoutwrapper']],
        ['nodeSection2', ['cssgridchildren', 'cssgridlayoutchildren', 'cssgriditems', 'cssgridlayoutitems', 'cssgridelements', 'cssgridlayoutelements', 'cssgridcontents', 'cssgridlayoutcontents']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Multi-column'],
    'data/node-0362.htm',
    [
        ['nodeSection1', ['cssmulticolumnlayout', 'cssmultiplecolumns', 'csscolumns', 'csscolumnlayouts']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Padding'],
    'data/node-0363.htm',
    [
        ['nodeSection1', ['csspadding', 'cssmargin', 'cssboxsizing']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Layout / flow', 'Positioning'],
    'data/node-0364.htm',
    [
        ['nodeSection1', ['csspositioning', 'cssdisplay', 'cssabsolutpositioning', 'csspositionabsolute', 'cssrelativepositioning', 'csspositionrelative', 'cssfixedpositioning', 'csspositionfixed', 'cssabsolutepositioning', 'csspositionabsolute']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Rules'],
    'data/node-0365.htm',
    []
);
addNode(
    ['Programming languages', 'CSS', 'Rules', 'Assorted'],
    'data/node-0366.htm',
    [
        ['nodeSection1', ['cssinlcudestylesheets', 'cssimportstylesheets', 'cssreferencestylehsheets']],
        ['nodeSection2', ['cssprologs', 'cssprologues', 'cssencondings', 'csscharacterencodings', 'csscharsets', 'cssdelcareenconding', 'cssdelcarefilenecodnign', 'cssdeclarecharacterenconding', 'cssutf8', 'cssunicode', 'cssumlauts']],
        ['nodeSection3', ['csspriority', 'cssconcurrency', 'cssrulepriority', 'cssrulepriorities', 'cssimportant', 'css!important']],
        ['nodeSection4', ['cssvendors', 'cssvendorspecific', 'cssvendorprefixes', 'cssexperimentalfeatures', 'cssprefixing', 'cssprefixes', 'cssbrowserprefixes', 'cssbrowserspecific']],
        ['nodeSection5', ['csstransparent', 'cssopaque', 'csstransparency', 'cssopacity']],
        ['nodeSection6', ['cssvisibility', 'cssvisible', 'csshide', 'cssplaceholders', 'cssinvisible']],
        ['nodeSection7', ['cssoverflows', 'cssoverflowing', 'cssscrollbar', 'cssscrolling']],
        ['nodeSection8', ['cssinhertance', 'cssinheriting', 'cssinheritvalues', 'cssinheritproperties']],
        ['nodeSection9', ['csscalculations', 'csscalcultor', 'csscalculate', 'csscalculating']],
        ['nodeSection10', ['cssunits', 'cssmearsurements', 'csslengths', 'csswidths', 'cssem', 'cssrem', 'csssizes', 'csssizeunits']],
        ['nodeSection11', ['csscursors', 'csschangecursors', 'csssetcursors', 'cssselectcursors']],
        ['nodeSection12', ['cssimagefilters', 'cssfilters', 'cssblurring', 'cssbrightness', 'csscontrast', 'cssgrayscale', 'cssgreyscale', 'csshue', 'cssinverting', 'csssaturate', 'csssaturating', 'csssepia']],
        ['nodeSection13', ['cssreset', 'cssbrowserreset']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Rules', 'Media queries'],
    'data/node-0367.htm',
    [
        ['nodeSection1', ['cssmediatypes', 'cssmediaqueries', 'cssprint', 'cssscreen', 'cssspeech', 'csshandheld', 'cssmediaspecific']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'CSS', 'Rules', 'Selectors'],
    'data/node-0368.htm',
    [
        ['nodeSection1', ['cssselectors', 'cssselections', 'cssselecting']],
        ['nodeSection2', ['cssattributeselectors', 'cssselectattributes']],
        ['nodeSection3', ['cssdynamicstates', 'cssdynamicproperties', 'csspseudoelements', 'cssactive', 'cssonactive', 'cssfocus', 'cssonfocus', 'csshover', 'cssonhover', 'csschecked', 'cssonchecked', 'csslinks']],
        ['nodeSection4', ['csshierarchy', 'csshierarchies', 'cssparents', 'csschildren', 'cssfirstchild', 'csslastchild', 'cssroot', 'csschildselectors', 'cssselectchildren']],
        ['nodeSection5', ['cssbefore', 'cssonbefore', 'cssafter', 'cssonafter', 'csscontentinjection', 'cssinjectcontent']],
        ['nodeSection6', ['']]
    ]
);
addNode(
    ['Programming languages', 'GAWK'],
    'data/node-0369.htm',
    []
);
addNode(
    ['Programming languages', 'GAWK', 'Arrays'],
    'data/node-0370.htm',
    [
        ['nodeSection1', ['gawkarrays', 'gawkarraysort', 'gawksortarrays', 'gawkarraylength', 'gawkarraysortorder', 'gawksortorder', 'gawksorting']],
        ['nodeSection2', ['gawksubsep', 'gawkisarray', 'gawkdeletearrays']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Assorted'],
    'data/node-0371.htm',
    [
        ['nodeSection1', ['gawkinclude', 'gawkimport', 'gawkloadfiles']],
        ['nodeSection2', ['gawkcontinuestatements', 'gawkcontinuelines', 'gawklinebreaks', 'gawknewline', 'gawkcontinuation', 'gawkstatementcontinuation']],
        ['nodeSection3', ['gawkfunctioncalls', 'gawkdynamicfunctions', 'gawkdynamicfuntioncalls']],
        ['nodeSection4', ['gawkswitch']],
        ['nodeSection5', ['gawkdebugging', 'gawkdebugger']],
        ['nodeSection6', ['gawkenvironmentvariables', 'gawkvariables', 'gawkprocessinfo', 'gawkerrno', 'gawkfunctab', 'gawksymtab', 'gacprocinfo', 'gawkpid', 'gawkuid', 'gawkuserid', 'gawktimeout', 'gawkidentifiers']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Command line'],
    'data/node-0372.htm',
    [
        ['nodeSection1', ['gawkparameters', 'gawkoptions', 'gawkcmd', 'gawkcommandline', 'gawklint', 'gawkprofiler', 'gawksandbox', 'gawkprofiling']],
        ['nodeSection2', ['gawkenvironmentvariables', 'gawkvariables']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Date and time'],
    'data/node-0373.htm',
    [
        ['nodeSection1', ['gawkdatetime', 'gawkdates', 'gawktime', 'gawksystime', 'gawkmktime', 'gawkstrftime', 'gawklocaltime']],
        ['nodeSection2', ['gawkdateformats', 'gawktimeformats', 'gawkformatdatetime', 'gawkformattime', 'gawkdatestring', 'gawktimestring', 'gawkdatetimestring']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Input and output'],
    'data/node-0374.htm',
    [
        ['nodeSection1', ['gawkinput', 'gawkfilename', 'gawkfnr', 'gawknr', 'gawkrt', 'gawknf', 'gawkrs', 'gawkfs', 'gawkfpat', 'gawkfieldwidths', 'gawkconvfmt', 'gawkfiles', 'gawkgetline', 'gawkreadfiles']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['gawkflush', 'gawkfflush', 'gawkclose', 'gawkoutput', 'gawkofs', 'gawkors', 'gawkofmt', '']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Maths and logic'],
    'data/node-0375.htm',
    [
        ['nodeSection1', ['gawkmaths', 'gawkcalculations', 'gawkint', 'gawkfloor', 'gawkceil', 'gawkround', 'gawksqrt', 'gawklog', 'gawkexp', 'gawknumbers', 'gawkdecimals', 'gawksinus', 'gawkcosinus', 'gawkatan2']],
        ['nodeSection2', ['gawkrandom', 'gawkseeds', 'gawkseeding', 'gawkshuffle', 'gawkrandomise', 'gawkrandomize']],
        ['nodeSection3', ['gawkparse', 'gawknumbers', 'gawkstrtoenum', 'gawkscanf', 'gawksscanf', 'gawktonumbers', 'gawkstringtonumbers']],
        ['nodeSection4', ['gawkbitoperators', 'gawkbitwiseoperators', 'gawkbitwiseand', 'gawkbitwiseor', 'gawkbitwisexor', 'gawkbitand', 'gawkbitor', 'gawkbitxor', 'gawkbitshift', 'gawkleftshift', 'gawkrightshift']],
        ['nodeSection5', ['gawkprecision', 'gawkbigdecimals', 'gawkbiginitegers', 'gawkroundingmode', 'gawkarbitraryprecision', 'gawkarbitaryprecision', 'gawkhighprecision']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Rules'],
    'data/node-0376.htm',
    [
        ['nodeSection1', ['gawkrules', 'gawkbeginfile', 'gawkendfile']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Shell and networking'],
    'data/node-0377.htm',
    [
        ['nodeSection1', ['gawkcommands', 'gawkexecute', 'gawksystem', 'gawkshell', 'gawkbash', 'gawksh', 'gawkpipes', 'gawkpiping', 'gawkcommandpipes']],
        ['nodeSection2', ['gawknetworking', 'gawktcp', 'gawkudp', 'gawkclients', 'gawknetworkclients', 'gawknetclients', 'gawkhttps', 'gawkwebservice', 'gawkservicecall', 'gawkrequests', 'gawkresponses']]
    ]
);
addNode(
    ['Programming languages', 'GAWK', 'Strings and regexp'],
    'data/node-0378.htm',
    [
        ['nodeSection1', ['gawkstrings', 'gawkstringfunctions', 'gawklowercase', 'gawkuppercase', 'gawktolowercase', 'gawktouppercase', 'gawksubstring', 'gawkstrlength', 'gawkstringlength', 'gawkparseintegers', 'gawkparseints']],
        ['nodeSection2', ['gawkindex', 'gawkmatch', 'gawksub', 'gawkgsub', 'gawkgensub', 'gawksearch', 'gawkreplace']],
        ['nodeSection3', ['gawksplitting', 'gawkpatsplitting', 'gawkstringsplitting', 'gawksplitstrings']],
        ['nodeSection4', ['gawkescape', 'gawkascii', 'gawksymbols', 'gawkmasking', 'gawkkeycodes', 'gawkcodes', 'gawkcharacters', 'gawkkeys']],
        ['nodeSection5', ['gawkregexps', 'gawkregularexpressions']],
        ['nodeSection6', ['gawkprintf', 'gawksprintf', 'gawkprintformats', 'gawkformats', 'gawkformatstrings', 'gawk%']]
    ]
);
addNode(
    ['Programming languages', 'HTML'],
    'data/node-0379.htm',
    []
);
addNode(
    ['Programming languages', 'HTML', 'Assorted'],
    'data/node-0380.htm',
    [
        ['nodeSection1', ['']],
        ['nodeSection2', ['htmllinks', 'htmlhyperlinks', 'htmlahref', 'htmlhref']],
        ['nodeSection3', ['htmleditable', 'htmledithtml', 'htmleditcontent', 'htmleditdocument', 'htmlinlineeditor', 'htmlinlineediting']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Formatting'],
    'data/node-0381.htm',
    [
        ['nodeSection1', ['htmlformattting', 'htmlformattext', 'htmlbold', 'htmlitalic', 'htmlunterlined', 'htmlstrikedout', 'htmlstrikeout', 'htmlstrikethrough', 'htmlstrikedthrough', 'htmlsmall', 'htmlbr', 'htmlhr', 'htmlsup', 'htmlsub', 'htmlmarked']],
        ['nodeSection2', ['htmlstrong', 'htmlemphasised', 'htmlemphasized', 'htmlstriked', 'htmldeleted', 'htmlinserted']],
        ['nodeSection3', ['htmlcode', 'htmltt', 'htmlvariable', 'htmlkeyboardinput', 'htmlkbd', 'htmlsamplecode', 'htmlcodesample', 'htmlexample', 'htmlcodeexample', 'htmloutput']],
        ['nodeSection4', ['htmlquote', 'htmlblockquote', 'htmlinlinequote', 'htmlcite', 'htmlcitation']],
        ['nodeSection5', ['htmlabbreviations', 'htmlacronyms', 'htmldefinition']],
        ['nodeSection6', ['htmlwordwrapper', 'htmlwordbreaker', 'htmlwrapwords', 'htmlbreakwords', 'htmldbi', 'htmldbo', 'htmldir', 'htmltextdirection', 'htmldirection']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Forms'],
    'data/node-0382.htm',
    [
        ['nodeSection1', ['htmlforms', 'htmlfieldsets', 'htmllegend', 'htmllabel']],
        ['nodeSection2', ['htmlinput', 'htmltextfields', 'htmlfields', 'htmltextinput', 'htmlpasswordfields', 'htmlemailfields', 'htmlurlfields', 'htmldatefields', 'htmldatetimefields', 'htmltimefields', 'htmlnumberfields']],
        ['nodeSection3', ['htmltextareas', 'htmltextboxes']],
        ['nodeSection4', ['htmlsuggestions', 'htmlsuggestionbox', 'htmlautocomplete', 'htmldatalist']],
        ['nodeSection5', ['htmlcheckboxes']],
        ['nodeSection6', ['htmlradiobuttons']],
        ['nodeSection7', ['htmllistboxes', 'htmldropdownboxes', 'htmlselect', 'htmloptgroups', 'htmloptions']],
        ['nodeSection8', ['htmlfiles', 'htmlformfiles']],
        ['nodeSection9', ['htmlbuttons', 'htmlsubmit', 'htmlreset']],
        ['nodeSection10', ['htmlprogressbars', 'htmlmeters']],
        ['nodeSection11', ['htmlformvalidation', 'htmlvalidateforms', 'htmlformvalidationselectors', 'htmlvalidationselectors']],
        ['nodeSection12', ['htmlcustomvalidation', 'htmlformvalidation', 'htmlformcustomvalidation', 'htmlvalidatorfunction']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Frames'],
    'data/node-0383.htm',
    [
        ['nodeSection1', ['htmlframes', 'htmlfamesets', 'htmlnoframes']],
        ['nodeSection2', ['htmliframes']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Header and CSS'],
    'data/node-0384.htm',
    [
        ['nodeSection1', ['htmldoctypes', 'htmldocumenttypes', 'htmldoctypedeclaration', 'htmldocumenttypedeclarations', 'htmldeclaredoctypes', 'htmldeclaredocumenttypes']],
        ['nodeSection2', ['htmldocumentstructure', 'htmlhead', 'htmltitle', 'htmlmanifest', 'htmlxmlns', 'htmlnamespaces', 'htmlencoding', 'htmlskeleton', 'htmlskeletton', 'htmlexample', 'htmlprologs', 'htmlprologues']],
        ['nodeSection3', ['htmlbaseurls', 'htmlurlbase', 'htmlviewport', 'htmlmetadata', 'htmlkeywords', 'htmlauthor', 'htmlrefresh', 'htmlcontenttype']],
        ['nodeSection4', ['htmllink', 'htmlpreload', 'htmlprefetch']],
        ['nodeSection5', ['htmlcss', 'htmlstyles', 'htmlstylesheets', 'htmlinlinestyles', 'htmlinlinecss']],
        ['nodeSection6', ['htmlfavicons']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Images'],
    'data/node-0385.htm',
    [
        ['nodeSection1', ['htmlimages', 'htmlimg']],
        ['nodeSection2', ['htmldatauris', 'htmlbase64images']],
        ['nodeSection3', ['htmlfigures', 'htmlfigcaption']],
        ['nodeSection4', ['htmlimagemaps', 'htmlismap']],
        ['nodeSection5', ['htmlmaps', 'htmlareas', 'htmlusemap']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'JavaScript and plugins'],
    'data/node-0386.htm',
    [
        ['nodeSection1', ['htmlscripts', 'htmljavascripts', 'htmlloadjavascript', 'htmlloadscripts', 'htmlnoscript', 'htmlasync', 'htmldefer', 'htmlinlinejavascript', 'htmlinlinescript', 'htmlinlinecode']],
        ['nodeSection2', ['htmlplugins', 'htmlflash', 'htmlobjects', 'htmlembeding']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'List and tables'],
    'data/node-0387.htm',
    [
        ['nodeSection1', ['htmllists', 'htmlol', 'htmlul', 'htmlli', 'htmlreversed', 'htmlstart', 'htmllisttypes', 'htmlorderedlists', 'htmlsortedlists', 'htmlunsortedlists', 'htmlunorderedlists']],
        ['nodeSection2', ['htmldescriptionlists', 'htmldefinitionlists', 'htmldefinitions', 'htmldescriptions', 'htmldl', 'htmldt', 'htmldd']],
        ['nodeSection3', ['htmltables', 'htmlcaptions', 'htmlcolgroups', 'htmlcols', 'htmlthead', 'htmltfoot', 'htmlfooter', 'htmltbody', 'htmltr', 'htmltd', 'htmlcolspan', 'htmlrowspan']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Multimedia'],
    'data/node-0388.htm',
    [
        ['nodeSection1', ['htmlmultimediaplayer', 'htmlplaymultimedia', 'htmlaudioplayer', 'htmlplayaudio', 'htmlmp3player', 'htmlplaymp3', 'htmlmusicplayer', 'htmlplaymusic']],
        ['nodeSection2', ['htmlvideos', 'htmlvideoplayer', 'htmlplayvideo']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'HTML', 'Semantic markup'],
    'data/node-0389.htm',
    [
        ['nodeSection1', ['htmldocumentstrucure', 'htmlsemantics', 'htmlsemanticmarkup', 'htmlheader', 'htmlnav', 'htmlh1', 'htmlfooter', 'htmlaside', 'htmlarticle', 'htmlsection', 'htmlmain', 'htmldetails']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['htmltime', 'htmldate', 'htmldatetime', 'htmldateandtime', 'htmladdresses']],
        ['nodeSection4', ['htmlmetadata', 'htmlmicrodata', 'htmlaria', 'htmlrdfa', 'htmlmicroformats']]
    ]
);
addNode(
    ['Programming languages', 'Java'],
    'data/node-0390.htm',
    []
);
addNode(
    ['Programming languages', 'Java', 'Advanced'],
    'data/node-0391.htm',
    []
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Beans'],
    'data/node-0392.htm',
    [
        ['nodeSection1', ['javabeans', 'javaejbs']],
        ['nodeSection2', ['javabeandescriptors', 'javadescriptors']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Hibernate - Annotations'],
    'data/node-0393.htm',
    [
        ['nodeSection1', ['javahibernateannotations', 'javahibernateannotatedclasses', 'javahibernateattributes', 'javahibernateattributedclasses', 'javahibernatetags', 'javahibernatetaggedclasses']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Hibernate - Assorted'],
    'data/node-0394.htm',
    [
        ['nodeSection1', ['javahibernatelibraries', 'javahibernatejars']],
        ['nodeSection2', ['javahibernatedatatypes', 'javahibernatetypes']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Hibernate - Interceptors'],
    'data/node-0395.htm',
    [
        ['nodeSection1', ['javahibernateinterceptors', 'javahibernateinterception', 'javahibernatehooks', 'javahibernatehooking']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Hibernate - Usage'],
    'data/node-0396.htm',
    [
        ['nodeSection1', ['javahibernateusage', 'javahibernatesessions', 'javahibernatetransactions', 'javahibernatecommit', 'javahibernaterollback', 'javahibernatecruds']],
        ['nodeSection2', ['javahibernateselect', 'javahibernatehql', 'javahibernatequeries', 'javahibernatefromclause', 'javahibernatewhereclause', 'javahibernateorderbyclause', 'javahibernategroupbyclause']],
        ['nodeSection3', ['javahibernatecriteriaqueries', 'javahibernatepersistenceframework', 'javahibernatecriterion']],
        ['nodeSection4', ['javahibernateinsertstatements', 'javahibernateinsertrecords', 'javahibernateinsertobjects']],
        ['nodeSection5', ['javahibernateupdatestatements', 'javahibernateupdaterecords', 'javahibernateupdateobjects']],
        ['nodeSection6', ['javahibernatedeletetatements', 'javahibernatedeleterecords', 'javahibernatedeleteobjects']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Hibernate - XML-mapping'],
    'data/node-0397.htm',
    [
        ['nodeSection1', ['javahibernatemapping', 'havahibernatexmlmapping', 'javahibernatepojos', 'javahibernateconfiguration', 'javahibernateconfiguremappings', 'javahibernatemapclasses']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'JDBC'],
    'data/node-0398.htm',
    [
        ['nodeSection1', ['javadatabases', 'javadbs', 'javajdbc', 'javadatabaseconnections', 'javaconnectodatabases', 'javasql']],
        ['nodeSection2', ['javasqlstatements', 'javapreparedstatements', 'javasqlstatements', 'javainsert', 'javasqlinsert', 'javaupdate', 'javasqlupdate', 'javadelete', 'javasqldelete', 'javacrud']],
        ['nodeSection3', ['javacursors', 'javaresultsets', 'javaqueryresults', 'javadatabaseresults', 'javadbresults']],
        ['nodeSection4', ['javastoredprocedures', 'javacallstoredprocedures', 'javainvokestoredprocedures']],
        ['nodeSection5', ['javatransactions', 'javadbtransactions', 'javadatabasetransactions', 'javacommit', 'javarollback', 'javasavepoints', 'javarestorepoints']],
        ['nodeSection6', ['javabatchstatements', 'javabatchsql', 'javasqlbatch']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'JMS'],
    'data/node-0399.htm',
    [
        ['nodeSection1', ['javajms', 'javajmsmessaging', 'javajmsqueues', 'javamessaging', 'javajmsqueues']],
        ['nodeSection2', ['javasendjmsmessages', 'javasendmessages', 'javapublishjmsmessages', 'javapublisher']],
        ['nodeSection3', ['javareceivejmsmessages', 'javareceivemessages', 'javareceiver']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'JUnit'],
    'data/node-0400.htm',
    [
        ['nodeSection1', ['javajunittests', 'javajunittesting', 'javatesting', 'javatests', 'javatestjunits']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Reflections'],
    'data/node-0401.htm',
    [
        ['nodeSection1', ['javareflections', 'javaintrospection']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'RMI'],
    'data/node-0402.htm',
    [
        ['nodeSection1', ['javarmi', 'javaremotemethodinvokation', 'javaremotemethodinvokation', 'javaremotemethods', 'javaremotemethodcalls', 'javarmiregistry', 'javarmiserver']],
        ['nodeSection2', ['javarmiclient']],
        ['nodeSection3', ['javarmistubs', 'javageneratermistubs']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Serialisation'],
    'data/node-0403.htm',
    [
        ['nodeSection1', ['javaserialisation', 'javaserialization', 'javaserialiseobjects', 'javaserializeobjects', 'javasaveobjects', 'javadeserialisation', 'javadeserializiation', 'javadeserialiseobjects', 'javadeserializeobjects']],
        ['nodeSection2', ['javaserialversionuid']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Servlets'],
    'data/node-0404.htm',
    [
        ['nodeSection1', ['javaservlets', 'javacookies', 'javahttprequests', 'javahttpresponses', 'javasessions', 'javacookies', 'javasetcookies', 'javaaddcookies']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Stream API (LINQ)'],
    'data/node-0405.htm',
    [
        ['nodeSection1', ['javalinq', 'javastreamapi', 'javastreams', 'javafilters', 'javagroupoperations']],
        ['nodeSection2', ['javacreatestreams', 'javagetstreams']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['javamin', 'javamax', 'javacount', 'javareducestreams', 'javamapreducestreams', 'javadistinctstreams', 'javasortstreams', 'javafilterstreams', 'javamapstreams', 'javaiteratestreams', 'javastreamtomap', 'javastreamtricks', 'javastreamtostring', 'javaconcatenatestreams']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Threads - Concurrency API'],
    'data/node-0406.htm',
    [
        ['nodeSection1', ['javathreads', 'javathreadpools', 'javatasks', 'javaconcurrencyapi', 'javaexecutors', 'javaexecutorservices', 'javathreadexecutors', 'javathreadexecutorservices']],
        ['nodeSection2', ['javacallables', 'javafutures', 'javatasks']],
        ['nodeSection3', ['javaatomicoperations', 'javaatomicintegers', 'javathreadsafevariables', 'javathreadsafedatatypes']],
        ['nodeSection4', ['javalocking', 'javalocks', 'javalockobject', 'javalockthreads', 'javareentrantlocks', 'javasynchronisethreads', 'javasynchronisation', 'javasynchronizethreads', 'javasynchronization']],
        ['nodeSection5', ['javasemaphores', 'javacountdownlatch', 'javacyclicbarriers', 'javaexchangers', 'javaphasers', 'javathreadsynchronisation', 'javathreadsynchronization']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Threads - Fork/Join'],
    'data/node-0407.htm',
    [
        ['nodeSection1', ['javathreads', 'javamultithreading', 'javaforkjoinframework', 'javatasks']],
        ['nodeSection2', ['javarecursiveactions']],
        ['nodeSection3', ['javarecursivetasks']],
        ['nodeSection4', ['javaforkjoinpools', 'javataskpools', 'javathreadpools']],
        ['nodeSection5', ['javacanceltask', 'javacancelthreads', 'javaterminatethreads', 'javaterminatetasks', 'javacanceltasks', 'javacancelthreads']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'Threads - Legacy'],
    'data/node-0408.htm',
    [
        ['nodeSection1', ['javathreads', 'javarunnable', 'javastartthreads', 'javaexecutethreads', 'javarunthreads']],
        ['nodeSection2', ['javasynchronisethreads', 'javasynchronizethreads', 'javathreadsynchronisation', 'javathreadsynchronization', 'javasleep', 'javajointhreads']],
        ['nodeSection3', ['javalocks', 'javalocking', 'javalockthreads', 'javalockobjects', 'javasynchronizeobjects', 'javasynchroniseobjects', 'javasynchronisethreads', 'javasynchronizethreads']],
        ['nodeSection4', ['javawaitforthreads', 'javanotifyallthreads', 'javanotifythread']],
        ['nodeSection5', ['javatimer', 'javatimeout', 'javascheduler']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Advanced', 'XML'],
    'data/node-0409.htm',
    [
        ['nodeSection1', ['javaxmlbinding', 'javaxmlobjectbinding', 'javajaxb', 'javaxmlparser', 'javaxml', 'javaparsexml']],
        ['nodeSection2', ['javajaxp', 'javaparsexmldocuments', 'javavalidatexmldocuments', 'javasaxxmlparsers', 'javasaxparsers']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core'],
    'data/node-0410.htm',
    []
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Annotations'],
    'data/node-0411.htm',
    [
        ['nodeSection1', ['javaannotations', 'javaattributes', 'javatags', 'javacustomannotations', 'javacustomtags', 'javacustomattributes']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['javabuiltinannotations', 'javabuiltintags', 'javabuiltinattributes', 'javaretention', 'javadocumented', 'javatarget', 'javainherited', 'javarepeatable', 'javaoverride', 'javadeprecated', 'javasuppresswarnings']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Arrays and collections'],
    'data/node-0412.htm',
    [
        ['nodeSection1', ['javaarrays', 'javacopyarrays', 'javacollections', 'javacontainers']],
        ['nodeSection2', ['javacollectionsframework', 'javacollectionframework', 'javalists', 'javasets', 'javahashtables', 'javahashsets', 'javaqueues', 'javatrees', 'javatreemaps']],
        ['nodeSection3', ['javathreadsafecollections', 'javaynchronisecollections', 'javasynchronizedcollections', 'javathreadsafecontainers', 'javasynchronisedcontainers', 'javasynchronizedcontainers']],
        ['nodeSection4', ['javaiterators', 'javaiteratecollections', 'javaiteratearrays', 'javaiteratecontainers', 'javaiteratecollections', 'javalooparrays', 'javaloopcontainers', 'javaloopcollections', 'javaspliterators']],
        ['nodeSection5', ['javacomparators', 'javacomperators', 'javacompareobjects', 'javacomparison', 'javacomparable']],
        ['nodeSection6', ['javainitialisecollections', 'javainitializecollections', 'javainitialisecontainers', 'javainitializecontainers', 'javainitcollections', 'javainitcontainers']],
        ['nodeSection7', ['javareverselists']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Assorted'],
    'data/node-0413.htm',
    [
        ['nodeSection1', ['javassertions']],
        ['nodeSection2', ['javapackes', 'javaimportpackages', 'javaimportclasses', 'javausing', 'javausepackages']],
        ['nodeSection3', ['javacompactprofiles']],
        ['nodeSection4', ['javajni', 'javanativeinterfaces']],
        ['nodeSection5', ['javause', 'javaautoclose', 'javaautocloseable', 'javautoclosable', 'javatrywithresources']],
        ['nodeSection6', ['javabitwiseoperators', 'javabitwiseand', 'javabitwiseor', 'javabitwisexor', 'javaxor', 'javabitwisecomplement', 'javabitwiseoperations', 'javabitshift']],
        ['nodeSection7', ['javalogging', 'javalog4j']],
        ['nodeSection8', ['javasuppresswarnings', 'javawarnings']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Classes and interfaces'],
    'data/node-0414.htm',
    [
        ['nodeSection1', ['javaclasses', 'javaconstructors', 'javadestructors', 'javafinalize', 'javafinalise', 'javanestedclasses', 'javaproperties', 'javastaticproperties', 'javastatimethods']],
        ['nodeSection2', ['javainheritance', 'javaabstractclasses', 'javainherit', 'javaderiveclasses', 'javaderivedclasses', 'javaoverridefunctions', 'javavirtualfunctions']],
        ['nodeSection3', ['javainterfaces']],
        ['nodeSection4', ['javaanonymousclasses']],
        ['nodeSection5', ['javafunctions']],
        ['nodeSection6', ['javamodifiers', 'javapublic', 'javaprotected', 'javaprivate', 'javastatic', 'javafinal', 'javaabstract', 'javatransient', 'javavolatile', 'javastrictfp', 'javaconst', 'javareadonly']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Control structures'],
    'data/node-0415.htm',
    [
        ['nodeSection1', ['javacontrolstructures', 'javaloops', 'javaforloops', 'javaforstatement', 'javaforeachloops', 'javaforeachstatements', 'javawhileloops', 'javawhilestatements', 'javadoloops', 'javadostatements']],
        ['nodeSection2', ['javaconditionalprocessing', 'javaifstatements', 'javaifs', 'javaifelse', 'javaelse', 'javaifthenelse', 'javaswitchcase', 'javaswitchstatements', 'javaswitchcommands', 'javaifcommands']],
        ['nodeSection3', ['javagotostatements', 'javagotocommands']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Data types - Dates'],
    'data/node-0416.htm',
    [
        ['nodeSection1', ['javadates', 'javadatetimes', 'javatimes', 'javacalendars', 'javaformatdates', 'javadateformats', 'javasimpledateformats', 'javatimezones']],
        ['nodeSection2', ['javalocaldates', 'javalocaltimes', 'javalocaldatetimes', 'javadatetimeformatter', 'javaparsedates', 'javaparsedatetimes', 'javaparsetimes']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Data types - Numbers'],
    'data/node-0417.htm',
    [
        ['nodeSection1', ['javadatatypes', 'javatypes', 'javaboolean', 'javaintegers', 'javalongs', 'javashorts', 'javabytes', 'javachars', 'javafloat', 'javadouble', 'javadecimals', 'javanumbers']],
        ['nodeSection2', ['javaparsenumbers']],
        ['nodeSection3', ['javaliterals', 'javanumericliterals', 'javaliteralnumbers']],
        ['nodeSection4', ['javacasts', 'javacasting', 'javatypecasts', 'javatypecasting']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Data types - Strings'],
    'data/node-0418.htm',
    [
        ['nodeSection1', ['javastrings', 'javastringbuffers', 'javastringbuilders', 'javaprintf', 'javatolowercase', 'javatouppercase', 'javalowercase', 'javauppercase', 'javatrim', 'javasubstring', 'javareplace', 'javasearch', 'javacomparestrings']],
        ['nodeSection2', ['javaregularexpressions', 'javapatterns', 'javamatchers']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Enums'],
    'data/node-0419.htm',
    [
        ['nodeSection1', ['javaenums', 'javaenumerations']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Exceptions'],
    'data/node-0420.htm',
    [
        ['nodeSection1', ['javaexceptions', 'javatrycatchfinally', 'javatryfinally', 'javafinally', 'javaexceptionhandling', 'javathrowexceptions', 'javathrowsexceptions']],
        ['nodeSection2', ['javacustomexceptions', 'javadefineexceptions', 'javaimplementexceptions', 'javacreateexceptions', 'javacustomexceptionclasses']],
        ['nodeSection3', ['javagetexceptionmessages', 'javastacktraces', 'javaprintstacktraces', 'javagetnestedexceptions', 'javanestedexceptions']],
        ['nodeSection4', ['javaexceptionhierarchy', 'javaexceptionclasses']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Generics'],
    'data/node-0421.htm',
    [
        ['nodeSection1', ['javatemplates', 'javagenerics', 'javagenericclasses', 'javatemplateclasses', 'javagenericfunctions', 'javatemplatefunctions']],
        ['nodeSection2', ['javatypeconstraints', 'javaconstraints', 'javagenericconstraints', 'javagenericsconstraints']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'I/O and files'],
    'data/node-0422.htm',
    [
        ['nodeSection1', ['javaio', 'javafileio', 'javastreams', 'javainputstreams', 'javaoutputstreams', 'javareaders', 'javawriters', 'javabufferedstreams', 'javazipstreams', 'javazippedstreams']],
        ['nodeSection2', ['javafiles', 'javafilestreams', 'javareadfiles', 'javawritefiles', 'javabinaryfiles']],
        ['nodeSection3', ['javaconsole', 'javasystem.out', 'javasystemout', 'javasystem.in', 'javasystemin', 'javasystem.err', 'javasystemerr', 'javastdout', 'javastderr', 'javastdin', 'javaprintln']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'I/O NIO'],
    'data/node-0423.htm',
    [
        ['nodeSection1', ['javanio2', 'javachannels', 'javacharsets', 'javapaths']],
        ['nodeSection2', ['javafiles', 'javafilechannels', 'javareadfiles', 'javawritefiles']],
        ['nodeSection3', ['javastreamchannels']],
        ['nodeSection4', ['javafilesystem', 'javabrowsefilesystem', 'javabrowsefiles']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'JavaDoc'],
    'data/node-0424.htm',
    [
        ['nodeSection1', ['javadoc', 'javajavadoc']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Lambda expressions'],
    'data/node-0425.htm',
    [
        ['nodeSection1', ['javalambdas', 'javalambdaexpressions', 'javafunctionalinterfaces']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['javabuiltininterfaces', 'javabuiltinlambdainterfaces', 'javabuiltinfunctionalinterfaces']],
        ['nodeSection4', ['javaclosures', 'javascopes', 'javacontexts']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'Core', 'Standard methods'],
    'data/node-0426.htm',
    [
        ['nodeSection1', ['javastandardmethods', 'javahashcode', 'javatostring', 'javaequals', 'javaclone', 'javacloning', 'javacloneobjects', 'javacompareto', 'javacompareobjects', 'javacomparable', 'javaautocloseable']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing'],
    'data/node-0427.htm',
    []
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Applets'],
    'data/node-0428.htm',
    [
        ['nodeSection1', ['javaapplets']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Controls'],
    'data/node-0429.htm',
    [
        ['nodeSection1', ['javacontrols', 'javacomponents', 'javaguicomponents', 'javalabels', 'javabuttons', 'javainputfields', 'javatextfields', 'javaradiobuttons', 'javacheckboxes', 'javalabels', 'javalists', 'javatrees']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Dialogs'],
    'data/node-0430.htm',
    [
        ['nodeSection1', ['javadialogs', 'javaoptionpanes', 'javadialogues']],
        ['nodeSection2', ['javafiledialogs', 'javafileopendialogs', 'javafilesavedialogs', 'javafiledialgues', 'javafileopendiaglogues', 'javafilesavedialogues', 'javaopenfiledialgs', 'javaopenfiledialogues']],
        ['nodeSection3', ['javacustomdialogs', 'javacustomdialgues']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Drawing'],
    'data/node-0431.htm',
    [
        ['nodeSection1', ['javadrawing', 'javadrawshapes', 'javapainting', 'javapainthsapes', '']],
        ['nodeSection2', ['javagraphicscontext']],
        ['nodeSection3', ['javacolors', 'javacolours', 'javaforegroundcolors', 'javaforegroundcolours', 'javabackgroundcolors', 'javabackgroundcolours']],
        ['nodeSection4', ['javashapes', 'javalines', 'javarectangles', 'javacircles', 'javaovals', 'javaellipses', 'javapolygons']],
        ['nodeSection5', ['javablendmodes', 'javablending']],
        ['nodeSection6', ['javafonts', 'javatext']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Events'],
    'data/node-0432.htm',
    [
        ['nodeSection1', ['javaevents', 'javaeventhandlers', 'javaeventhandling', 'javahandleevents', 'javaonlick', 'javalisteners', 'javaeventlisteners', 'javasctionlisteners']],
        ['nodeSection2', ['javamouseevents', 'javakeyboardevents', 'javaonlinput', 'javaonchange', 'javaonscroll']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Images'],
    'data/node-0433.htm',
    [
        ['nodeSection1', ['javaimages', 'javaloadimages', 'javaopenimages', 'javaimagefiles', 'javaexternalimages']],
        ['nodeSection2', ['javaimageobservers']],
        ['nodeSection3', ['javadoublebuffering', 'javaflickerfreeanimations']],
        ['nodeSection4', ['javamediatrackers', 'javaimageconsumers', 'javaimageproducers', 'javaimagefilters', 'javaimageeffects', 'javacropimages', 'javablurrimages', 'javaeffects']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Layout managers'],
    'data/node-0434.htm',
    [
        ['nodeSection1', ['javalayoutmanagers', 'javanorth', 'javasouth', 'javaeast', 'javawest', 'javaflowlayout', 'javaborderlayout', 'javagridlayout']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Menus'],
    'data/node-0435.htm',
    [
        ['nodeSection1', ['javamenus', 'javasubmenus']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['javamenubars', 'javamainmenus', 'javaaccelerators', 'javaacellerators', 'javaaccellerators', 'javascelerators']],
        ['nodeSection4', ['javacontextmenus', 'javapopupmenus']],
        ['nodeSection5', ['javatoolbars']],
        ['nodeSection6', ['javaactions', 'javacommands', 'javamenuactions', 'javamenucommands']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - AWT/Swing', 'Windows'],
    'data/node-0436.htm',
    [
        ['nodeSection1', ['javawindows', 'javaswingexamples', 'javaguiexamples', 'javaswingsamples', 'javaswingsyntax', 'javaguisamples', 'javaguisamples']],
        ['nodeSection2', ['javaawtexamples', 'javaawtsyntax', 'javaawtsamples']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX'],
    'data/node-0437.htm',
    []
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Controls'],
    'data/node-0438.htm',
    [
        ['nodeSection1', ['javafxcontrols', 'javafxcomponents', 'javafxguicomponents', 'javafxguicontrols']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Drawing'],
    'data/node-0439.htm',
    [
        ['nodeSection1', ['javafxdrawing', 'javafxpainting', 'javafxdrawshapes', 'javafxpaintshapes', 'javafxgraphicscontext', 'javafxcolors', 'javafxcolours', 'javafxdrawlines', 'javafxdrawrectangles', 'javafxlines', 'javafxrectangles']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Effects'],
    'data/node-0440.htm',
    [
        ['nodeSection1', ['javafxeffetcs', 'javafxblurimages', 'javafxshadows', 'javafxdropshadows', 'javafxapplyeffects', 'javafxaddeffects']],
        ['nodeSection2', ['javafxtransformations', 'javafxrotate', 'javafxscale', 'javafxshaear', 'javafxtranslate', 'javafxmove', 'javafxrotating', 'javafxscaling', 'javafxshearing', 'javafxtranslating', 'javafxmoving']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Events'],
    'data/node-0441.htm',
    [
        ['nodeSection1', ['javafxevents', 'javafxeventhandling', 'javafxeventhandlers', 'javafxonclick', 'javafxoninput', 'javafxonchange', 'javafxonscrolling']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Layout managers'],
    'data/node-0442.htm',
    [
        ['nodeSection1', ['javafxlayoutmanagers', 'javafxflowlayouts', 'javafxflowpanes', 'javafxgridlayouts', 'javafxgridpanes', 'javafxborderlayouts', 'javafxborderpanes', 'javafxnorth', 'javafxsouth', 'javafxwest', 'javafxeast']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Menus'],
    'data/node-0443.htm',
    [
        ['nodeSection1', ['javafxmenus', 'javafxsubmenus']],
        ['nodeSection2', ['javafxmenubars', 'javafxmainmenus']],
        ['nodeSection3', ['javafxcontextmenus', 'javafxpopupmenus']],
        ['nodeSection4', ['javafxtoolbars']]
    ]
);
addNode(
    ['Programming languages', 'Java', 'GUI - JavaFX', 'Windows'],
    'data/node-0444.htm',
    [
        ['nodeSection1', ['javafxsyntax', 'javafxexamples', 'javafxapplications', 'javafxwindows', 'javafxsamples']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript'],
    'data/node-0445.htm',
    []
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs'],
    'data/node-0446.htm',
    []
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Ajax'],
    'data/node-0447.htm',
    [
        ['nodeSection1', ['jsajax', 'jsxmlhttprequests', 'jshttprequests', 'jsxhr']],
        ['nodeSection2', ['jsajaxget', 'jsajaxpost', 'jsajaxpostforms', 'jsajaxforms', 'jsajaxjson']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['jsajaxevents', 'jsonajax', 'onasyncload']],
        ['nodeSection5', ['jsajaxcrossodmain', 'jscrossdomainajax', 'jsxdomainrequest']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Canvas'],
    'data/node-0448.htm',
    [
        ['nodeSection1', ['jscanvases', 'jspaintcanvases', 'jsdrawcanvases', 'jsvectorgraphics', 'jsgraphics', 'htmlcanvases']],
        ['nodeSection2', ['jsdrawcontexts', 'jscontexts', 'jspaintcontexts', 'jscanvascontexts']],
        ['nodeSection3', ['jsgradients', 'jscanvasgradients', 'jspaintgradients', 'jsdrawgradients']],
        ['nodeSection4', ['jspatterns', 'jscanvaspatterns', 'jspaintpatterns', 'jsdrawpatterns']],
        ['nodeSection5', ['jscanvastransformations', 'jstransformations', 'jscanvasrotate', 'jsrotatecanvas', 'jscanvasscale', 'jsscalecanvas', 'jscanvastranslate', 'jstranslatecanvas', 'jscanvastransform', 'jstransformcanvas']],
        ['nodeSection6', ['jsrectangles', 'jscanvasrectangles', 'jspaintrectangles', 'jsdrawrectangles']],
        ['nodeSection7', ['jspaths', 'jscanvaspaths', 'jspaintpaths', 'jsdrawpaths']],
        ['nodeSection8', ['jstext', 'jscanvastext', 'jspainttext', 'jsdrawtext']],
        ['nodeSection9', ['jscanvasimages', 'jscanvasbitmapimages', 'jspaintimages', 'jsdrawimages', 'jsimagemanipulation', 'jsmainpulateimages', 'jsmanipulatebitmaps', 'jsgrayscale', 'jsgreyscale', 'jsbitmaps', 'jscanvasbitmaps']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Files'],
    'data/node-0449.htm',
    [
        ['nodeSection1', ['jsfileapis', 'jsfilesapis', 'jsfilereader', 'jsreadfiles', 'jsloadfiles', 'jsgetfiles', 'jsfileinterfaces', 'jsfs']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Geolocation'],
    'data/node-0450.htm',
    [
        ['nodeSection1', ['jsgeolocationapi', 'jslocationapi', 'jsgeographyapi', 'jsmaps', 'jslatitude', 'jslongitude', 'jsaltitude', 'jsposition', 'jsgeoposition', 'jsgeoapi']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'IndexedDB'],
    'data/node-0451.htm',
    [
        ['nodeSection1', ['jsdbs', 'jsdatabases', 'jsindexeddbs', 'jsindexdbs', 'jsdbopen', 'jsdbcreate', 'jscreatedb', 'jsopendb', 'jsinitialisedbs', 'jsinitializedbs', 'jssetupdbs', 'jsdbversion', 'jsdbtables', 'jsdbcreatetables', 'jsdbstores', 'jsdbobjectstores', 'jsdbdatastores']],
        ['nodeSection2', ['jsdbtransactions', 'jsdbcommit', 'jsdbrollback']],
        ['nodeSection3', ['jsdbindexes', 'jsdbindices']],
        ['nodeSection4', ['jsdbinsert', 'jsdbupdate', 'jsdbdelete', 'jsdbcrud']],
        ['nodeSection5', ['jsdbcursors', 'jsdbopencursor', 'jsdbreadcorsor', 'jsdbdefinecursor', 'jsdbdeclarecursor', 'jsdbreadcursor']],
        ['nodeSection6', ['jsdbcursorranges']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Messaging'],
    'data/node-0452.htm',
    [
        ['nodeSection1', ['jsmessaging', 'jspostmessages', 'jssendmessages', 'jscommunication', 'jsmessageexchange', 'jsmx', 'jsonmessage']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Offline storage'],
    'data/node-0453.htm',
    [
        ['nodeSection1', ['jsonlinestatus', 'jsbrowseronline', 'jsisonline', 'jsofflinestatus', 'jsbrowseroffline', 'jsisoffline']],
        ['nodeSection2', ['jsofflinecachestorage', 'jscachestorage', 'jsofflinestoragecache']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['jswebstorage', 'jssessionstorage', 'jslocalstorage', 'jsstorage']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Web sockets'],
    'data/node-0454.htm',
    [
        ['nodeSection1', ['jswebsockets', 'jsws', 'jswebapi', 'jswebservices', 'jssockets']],
        ['nodeSection2', ['jsserverevents', 'jsserversentevents']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'Web workers'],
    'data/node-0455.htm',
    [
        ['nodeSection1', ['jswebworkers', 'jsworkers', 'jsasynchronously', 'jsbackgroundjobs', 'jsbackgroundtasks', 'jsjobs', 'jstasks', 'jsscheduler', 'jstaskscheduler', 'jsjobscheduler', 'jsschedulejobs', 'jsscheduletasks']],
        ['nodeSection2', ['jswebworkers', 'jsworkers', 'jsasynchronously', 'jsbackgroundjobs', 'jsbackgroundtasks', 'jsjobs', 'jstasks', 'jsscheduler', 'jstaskscheduler', 'jsjobscheduler', 'jsschedulejobs', 'jsscheduletasks']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser APIs', 'XML'],
    'data/node-0456.htm',
    [
        ['nodeSection1', ['jsxml', 'jsxmldom', 'jscreatexmldom', 'jscreatexmldocuments', 'jsxmldocuments']],
        ['nodeSection2', ['jsparsexml', 'jsxmlparser', 'jsxmlserialise', 'jsxmlserialize', 'jsserializexml', 'jsserialisexml', 'jsdeserialisexml', 'jsdeserializexml']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['jsxmlxpath', 'jsxpath', 'jsxmlquery', 'jsxmlqueries', 'jsqueryxml']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['jsxslt', 'jsxmltransformations', 'jstransformxml']],
        ['nodeSection7', ['']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface'],
    'data/node-0457.htm',
    []
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Browser detection'],
    'data/node-0458.htm',
    [
        ['nodeSection1', ['jsbrowserdetection', 'jsfeaturedetection', 'jsdetection', 'jsdetectbrowserfeatures', 'jsdetectbrowsers', 'jsdetectfeatures']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Cookies and query strings'],
    'data/node-0459.htm',
    [
        ['nodeSection1', ['jsquerystrings', 'jsgetparameters', 'jsurlparameters', 'jsurlparser', 'jsparseurlparameters', 'jsparsequerystrings', 'jsgetquerystrings']],
        ['nodeSection2', ['jscookies', 'jssetcookies', 'jsgetcookies']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['jssubcookies', 'jsnestedcookies']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Dialogs and pop-ups'],
    'data/node-0460.htm',
    [
        ['nodeSection1', ['jsdialogs', 'jsdialogues', 'jsalert', 'jsconfirmations', 'jsprompts', 'jsprompting', 'jsconfirming', 'jsuserinput', 'jsinput', 'jsgetuserinput', 'jsmsgbox', 'jsmessagebox']],
        ['nodeSection2', ['jspopups', 'jspop-ups', 'jsopenwindows', 'jswindowopen', 'jswindows', 'jsnewwindow', 'jsopennewwindow']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'DOM - Core'],
    'data/node-0461.htm',
    [
        ['nodeSection1', ['jsdomnodes', 'jsnodes', 'jsnodetypes', 'jsdomnodetypes', 'jsdomtypes']],
        ['nodeSection2', ['jsdomchildren', 'jschildren', 'jsdomparents', 'jsparents', 'jschildnodes', 'jsdomchildnodes', 'jsdomtraverse', 'jstraversedom', 'jsdomtraveral', 'jstraversal', 'jsdomhierarchy', 'jshierarchy', 'jsgetchildren', 'jsgetparents']],
        ['nodeSection3', ['jsdocuments', 'jsdomdocuments']],
        ['nodeSection4', ['jsdocumentsize', 'jswindowsize', 'jsviewportsize', 'jsscreensize', 'jsresizewindows', 'jsmovewindows', 'jsgetwindowsize', 'jsgetscreensize', 'jsgetdocumentsize', 'jsgetviewportsize']],
        ['nodeSection5', ['jsdomelements', 'jsdomtags', 'jselements', 'jstags']],
        ['nodeSection6', ['jsdomattributes', 'jsattributes']],
        ['nodeSection7', ['jsdomtextnodes', 'jstextnodes']],
        ['nodeSection8', ['jsdomtables', 'jstables']],
        ['nodeSection9', ['jsdomimages', 'jsimages']],
        ['nodeSection10', ['jsdomframes', 'jsframes']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'DOM - Forms'],
    'data/node-0462.htm',
    [
        ['nodeSection1', ['jsdomforms', 'jsforms', 'jsonsubmit']],
        ['nodeSection2', ['jsdomformfields', 'jsformfields', 'jsdomfields', 'jsfields', 'jsdominputfields', 'jsinputfields', 'jsforminputfields']],
        ['nodeSection3', ['jsdomtextfields', 'jstextfields', 'jsformtextfields']],
        ['nodeSection4', ['jsdomselectboxes', 'jsselectboxes', 'jsoptions', 'jsdomoptions', 'jsdomdropdownboxes', 'jsdropdownboxes', 'jsformoptions', 'jsformselectboxes', 'jsformdropdownboxes']],
        ['nodeSection5', ['jsbuttons', 'jsdombuttons', 'jsformbuttons', 'jsdomformbuttons', 'jssubmitbuttons', 'jsdomsubmitbuttons']],
        ['nodeSection6', ['jsvalidatforms', 'jsvalidateinputfields', 'jsinputvalidation', 'jsinputvalidator', 'jsformvalidator', 'jsformvalidation', 'jsvalidateforms', 'jscustomvalidation']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'DOM - Namespaces'],
    'data/node-0463.htm',
    [
        ['nodeSection1', ['jsdomnamespaces', 'jsnamespaces']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'DOM - Queries'],
    'data/node-0464.htm',
    [
        ['nodeSection1', ['jsdomquery', 'jsdomqueries', 'jsquery', 'jsqueries', 'jsdomgetelementby', 'jsgetelementby', 'jsgetelementytagname', 'jsgetelementbyid', 'jsgetelementbyclassname', 'jsselectors', 'jsdomselectors']],
        ['nodeSection2', ['jsdomiterators', 'jsiterators', 'jsdomtraversal', 'jstraversal', 'jstraversedomnodes']],
        ['nodeSection3', ['jsdomranges', 'jsranges', 'jsdomselection', 'jsdomrangeselection', 'jsselectdomranges', 'jsselectranges']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'DOM - Styles'],
    'data/node-0465.htm',
    [
        ['nodeSection1', ['jsdomstyles', 'jsstyles', 'jscss', 'jsinlinestyles', 'jssetstyles', 'jsgetstyles']],
        ['nodeSection2', ['jsdomcomputedstyles', 'jscomputedstyles', 'jseffectivestyles', 'jsgeteffectivestyles']],
        ['nodeSection3', ['jsdomstylesheets', 'jsstylesheets', 'jssstylerules', 'jsstylesheetrules', 'jsdomstylerules', 'jsdomstylesheetrules']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Events - Handling'],
    'data/node-0466.htm',
    [
        ['nodeSection1', ['jseventhandlers', 'jseventhandling', 'jseventlisteners', 'jsaddeventlistener', 'jsaddlistener', 'jsremovelistener', 'jsremoveeventlistener', 'jsonevent']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['jseventsimulation', 'jssimulateevents', 'jsraiseevents', 'jssendevents', 'jsdispatchevents', 'jscreateevents']],
        ['nodeSection4', ['jscustomevents']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Events - Types'],
    'data/node-0467.htm',
    [
        ['nodeSection1', ['jsevents', 'jscancelevents', 'jseventpropagation', 'jspropagation', 'jseventproperties', 'jseventobjects', 'jseventbubbeling', 'jseventcancellation']],
        ['nodeSection2', ['jsbrowserevents', 'jswindowevents', 'jsdocumentevents', 'jsbodyevents', 'jspageevents', 'jsonload', 'jsonresize', 'jsonscroll', 'jsresizeevent', 'jsscrollevent', 'jsonscroll', 'jsonresize']],
        ['nodeSection3', ['jsfocusevents', 'jsonfocusin', 'jsonfocusout', 'jsonblur']],
        ['nodeSection4', ['jsmouseevents', 'jsclickevents', 'jsonclick', 'jsonmouseover', 'jsonmouseout', 'jsondoubleclick', 'jsondblclick', 'jsonmousedblclick', 'jsonmousedoubleclick', 'onmousenter', 'onmouseleave']],
        ['nodeSection5', ['jswheelevents', 'jsmousewheelevents', 'jsonwheelscroll', 'jsonmousewheelscroll']],
        ['nodeSection6', ['jstextevents', 'jsinputevents', 'jsonkey', 'jsoninput', 'jsonselect', 'jsoncontextmenu', 'jscontextmenu', 'jsonkeypress', 'jsonkeydown', 'jsonkeyup']],
        ['nodeSection7', ['jscompositeevents', 'jscomposition', 'jsoncompositionstart', 'jsoncompositionupdate', 'jsoncompositionend']],
        ['nodeSection8', ['jsdomevents', 'jsmutationevents', 'jsondomchanged', 'jsondommodified']],
        ['nodeSection9', ['jstouchevents', 'jsontouchstart', 'jsontouchmove', 'jsontouchend', 'jsgestureevents', 'jsongesturestart', 'jsongesturechange', 'jsongestureend']],
        ['nodeSection10', ['jsdraganddropevents', 'jsdrag', 'jsdrop', 'jsondrag', 'jsondrop']],
        ['nodeSection11', ['jsdragandropevents', 'jsdragtext', 'jsdragelements', 'jsdragging', 'jsdropping', 'jsondrag']],
        ['nodeSection12', ['jsdropping', 'jsdropevents', 'jsdroptext', 'jsdropelements', 'jsdropnodes', 'jsondrop']],
        ['nodeSection13', ['jsdropfiles', 'jsfiledropping', 'jsfiledropper', 'jsfilesdropping', 'jsreadfiles', 'jsondropfiles', 'jsonfiledrop']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Multimedia'],
    'data/node-0468.htm',
    [
        ['nodeSection1', ['jsmultimedia', 'jsaudio', 'jsvideos']],
        ['nodeSection2', ['jsplayback', 'jsvideoplayback', 'jsaudioplayback', 'jsmultimediaplayback', 'jsmediaplayback', 'jsplayvideo', 'jsplayaudio', 'jsplaymedia']],
        ['nodeSection3', ['jsmultimediaevents', 'jsaudioevents', 'jsvideoevents', 'jsonplayback', 'jsonpause', 'jsplaybackevents']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Navigation and history'],
    'data/node-0469.htm',
    [
        ['nodeSection1', ['jshref', 'jslocationhref', 'jshistory', 'jsbrowserhistory', 'jsbackbutton', 'jspagestate']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'Browser Interface', 'Timers'],
    'data/node-0470.htm',
    [
        ['nodeSection1', ['jstimers', 'jstimeout', 'jsontimeout', 'jsinterval', 'jsoninterval', 'jscronjob', 'jsscheduler', 'jsscheduling']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['jsanimations', 'jsanimationtimers', 'jsanimate']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript'],
    'data/node-0471.htm',
    []
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Arrays'],
    'data/node-0472.htm',
    [
        ['nodeSection1', ['jsarrays', 'jsisarray', 'jsarraycheck', 'jscheckarrays', 'jsarraylength', 'jsarraysize']],
        ['nodeSection2', ['jsstacks', 'jsqueues', 'jsarraystacks', 'jsarrayqueues', 'jspusharrays', 'jsarraypush', 'jspoparrays', 'jsarraypop', 'jsjoinarrays', 'jsarrayjoin', 'jssplitarrays', 'jsarraysplit', 'jssortarrays', 'jsarraysort', 'jsreversearrays']],
        ['nodeSection3', ['jsiterators', 'jsarrayiterators', 'jsiteratearrays', 'jsforeach', 'jsreducearrays', 'jsarrayreduce', 'jsaggregatearrays', 'jsarrayaggregate', 'jsaggregatefunctions', 'jslooparrays']],
        ['nodeSection4', ['jsarrayassignments', 'jsassignarrays']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Assorted'],
    'data/node-0473.htm',
    [
        ['nodeSection1', ['jsscripttags', 'jsscriptnodes', 'jsembeddedcode', 'jsembedding', 'jsembedcode', 'jscodeembedding', 'jsincludecode', 'jsincludescript', 'jsscriptinclude']],
        ['nodeSection2', ['jsloading', 'jsloaddynamically', 'jsdynamicloading']],
        ['nodeSection3', ['jsstrictmode', 'jslint', 'jswarnings', 'jscompilerwarnings', 'jsvalidation', 'jsvalidating']],
        ['nodeSection4', ['jseval', 'jsevaluatecode', 'jsevaluatingcode', 'jsevaluation', 'jsdynamiccode', 'jsfromstring']],
        ['nodeSection5', ['jsoperators', 'jsshift', 'jsbitoperators', 'jsbitshift', 'jsbitwiseoperators', 'jsbits']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Blocks'],
    'data/node-0474.htm',
    [
        ['nodeSection1', ['jsscopes', 'jsscoping']],
        ['nodeSection2', ['jsblocks', 'jscodeblocks', 'jsencapsulation', 'jscodeencapsulation', 'jsblockencapsulation', 'jswrapper', 'jswrapping', 'jscodewrappers', 'jscodeblockwrappers']],
        ['nodeSection3', ['jsnamespaces']],
        ['nodeSection4', ['jsmodules', 'jsimportmodules', 'jsmodulesimport', 'jsmoduleimport']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Classes - Definition'],
    'data/node-0475.htm',
    [
        ['nodeSection1', ['jsclasses', 'jsobjects', 'jsprototypes', 'jsconstructors', 'jsdefineclasses', 'jsdelcareclasses', 'jsobjectoriented', 'jsoo']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['jsanonymousclasses', 'jsinlineclasses']],
        ['nodeSection5', ['jsdataprotection', 'jsprotection', 'jsprotectedclasses', 'jsprotectedproperties', 'jsprivateproperties', 'jsprivateclasses', 'jshide', 'jshiding', 'jshiddenproperties']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['jsstaticproperties']],
        ['nodeSection8', ['jssingletons']],
        ['nodeSection9', ['jspropertyconfiguration', 'jsconfigureproperties']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Classes - Inheritance'],
    'data/node-0476.htm',
    [
        ['nodeSection1', ['jsinheritance', 'jsclasshierarchy', 'jsclasshierachies', 'jshierarchy', 'jshierarchies', 'jsextends', 'jsextendclasses', 'jsinherits', 'jsinheriting', 'jsderiveclasses']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Classes - Usage'],
    'data/node-0477.htm',
    [
        ['nodeSection1', ['jsproperties', 'jsobjectusage', 'jsclassusage', 'jsuseclasses', 'jsuseobjects', 'jsdeleteobjectinstances', 'jsdeleteinstances', 'jsistypeof', 'jsisinstanceof', 'jsisprototypeof']],
        ['nodeSection2', ['jsstandardmethods', 'jsstdmethods', 'jstostring']],
        ['nodeSection3', ['jsforeach', 'jsforin', 'jsiterateproperties', 'jsenumerateproperties', 'jsloopproperties']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Collections'],
    'data/node-0478.htm',
    [
        ['nodeSection1', ['jscollections', 'jscontainers', 'jsmaps', 'jscollectionmaps', 'jscontainermaps', 'jssets', 'jscollectionsets', 'jscontainersets', 'jsweakmaps']],
        ['nodeSection2', ['jsiterators', 'jsiteration', 'jsiterating', 'jsiteratecollections']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Control flow'],
    'data/node-0479.htm',
    [
        ['nodeSection1', ['jsfor', 'jsloops', 'jsiterations']],
        ['nodeSection2', ['jsswitchstatement', 'jsswitchcase', 'jscasestatement']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Error handling'],
    'data/node-0480.htm',
    [
        ['nodeSection1', ['jsexceptions', 'jserrorhandling', 'jsexceptionhandling', 'jserrors', 'jstrycatchfinally', 'jsthrowexceptions', 'jscatchexceptions', 'jsfinally']],
        ['nodeSection2', ['jsonerror']],
        ['nodeSection3', ['jsconsolelogging', 'jsdebugging', 'jsmessages', 'jslogging', 'jstrace', 'jstracing', 'jslogmessages', 'jstracemessages']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Functions'],
    'data/node-0481.htm',
    [
        ['nodeSection1', ['jsfunctions', 'jsdefinefunctions', 'jsimplementfunctions', 'jsfunctiondefinitions']],
        ['nodeSection2', ['jscallfunctions', 'jsapply', 'jsbindfunctions', 'jsinvokefunctions']],
        ['nodeSection3', ['jsfunctionparameters', 'jsfunctionargs', 'jsfunctionarguments', 'jsparameters', 'jsargs', 'jsarguments']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['jsvariableargumentlists', 'jsvariableargumentslists', 'jsvargs']],
        ['nodeSection6', ['jslambdas', 'jsclosures', 'jsfunctionexpressions', 'jsinlinefunctions', 'jscallbackfunctions', 'jscallbacks', 'jsfunctionpointers']],
        ['nodeSection7', ['']],
        ['nodeSection8', ['jscaching', 'jscache', 'jsfunctioncaching', 'jsfunctionresultcaching', 'jsfunctioncache', 'jsfunctionresultcache', 'jsresultcache', 'jsresultcaching', 'jscachefunctions', 'jscachefunctionresults']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'JSON'],
    'data/node-0482.htm',
    [
        ['nodeSection1', ['jsjsonsyntax', 'jsjsonformat', 'jsjsonproperties', 'jsjsonarrays']],
        ['nodeSection2', ['jsjsonparse', 'jsjsonread', 'jsjsondeserialise', 'jsjsondeserialize', 'jsjsondeserialisation', 'jsjsondeserialization', 'jsparsejson', 'jsreadjson', 'jsimportjson', 'jsdeserialisejson', 'jsdeserializejson']],
        ['nodeSection3', ['jsjsonserialise', 'jsjsonseralize', 'jsjsonserialisation', 'jsjsonseralization', 'jsjsontostring', 'jsjsonrendering', 'jsrenderjson', 'jsstringifyjason', 'jsserializejson', 'jsserializejson']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Peformance tuning'],
    'data/node-0483.htm',
    [
        ['nodeSection1', ['jsperformancetuning', 'jstuneperformance', 'jstuning', 'jsoptimiseperformance', 'jsoptimizeperformance', 'jsoptimisation', 'jsoptimization', 'jsperformanceoptimisation', 'jsperformanceoptimization']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['']]
    ]
);
addNode(
    ['Programming languages', 'JavaScript', 'ECMAScript', 'Variables'],
    'data/node-0484.htm',
    [
        ['nodeSection1', ['jsdatatypes', 'jstypes', 'jsundefined', 'jsboolean', 'jsnull']],
        ['nodeSection2', ['jsconst', 'jslet', 'jsvars', 'jsdefinevariables', 'jsvariables']],
        ['nodeSection3', ['jstypeof', 'jsinstanceof', 'jschecktypes', 'jstypechecks', 'jstypechecking', 'jscompare', 'jscomparing', 'js===', 'js!==']],
        ['nodeSection4', ['jsnumbers', 'jsparseints', 'jsparseintegers', 'jsparsenumbers', 'jsmaths', 'jsceiling', 'jsfloor', 'jsrounding', 'jsabs', 'jssignum', 'jssqrt', 'jsmin', 'jsmax', 'jsnan', 'jsconvertnumbers', 'jsnumberconvert']],
        ['nodeSection5', ['jsstrings', 'jstolowercase', 'jslowercase', 'jstouppercase', 'jsuppercase', 'jsencodeuris', 'jsurlencode', 'jsenconde', 'jencoding', 'jsdecodeuris', 'jssubstrings', 'jssplitstrings', 'jsstringsplit']],
        ['nodeSection6', ['jsregexp', 'jsmatch', 'jsregularexpressions', 'jssearchstrings', 'jsreplacestrings', 'jsstringsearch', 'jsstringreplace', 'jspatterns']],
        ['nodeSection7', ['jsdates', 'jstimes', 'jsdateandtimes', 'jsms', 'jsmilliseconds', 'js1970', 'jsparsedate', 'jsdateparse', 'jsutc']]
    ]
);
addNode(
    ['Programming languages', 'Less'],
    'data/node-0485.htm',
    []
);
addNode(
    ['Programming languages', 'Less', 'Assorted'],
    'data/node-0486.htm',
    [
        ['nodeSection1', ['lesscommands', 'lesscommandline', 'lessconverters', 'lesscompilers', 'lessusage', 'lesscompileroptions', 'lessoptions', 'lessconverteroptions']],
        ['nodeSection2', ['lesscomments']],
        ['nodeSection3', ['lessimports', 'lessincludes', 'lessimportfiles', 'lessincludefiles', 'lessimportstyles', 'lessincludestyles', 'lessimportstylesheets', 'lessincludestylesheets']]
    ]
);
addNode(
    ['Programming languages', 'Less', 'Control structures'],
    'data/node-0487.htm',
    [
        ['nodeSection1', ['lessloops', 'lessforeach', 'lessiterate', 'lessiterations', 'lessrecursive', 'lessrecursion', 'lesslooping', 'lessforstatement', 'lessforcommand', 'lesswhile', 'lessuntil', 'lessdowhile', 'lessdountil']]
    ]
);
addNode(
    ['Programming languages', 'Less', 'Inheritance and mixins'],
    'data/node-0488.htm',
    [
        ['nodeSection1', ['lessinheritance', 'lessinheritstyles', 'lessinheritrules', 'lessinheritclasses', 'lessderiveclasses', 'lessderivestyles', 'lessderiverules', 'lessextending', 'lessextends', 'lessextendstyles', 'lessextendrules', 'lessextendclasses']],
        ['nodeSection2', ['lessmixins', 'lesswidgets']],
        ['nodeSection3', ['lessnamespaces', 'lessnamespacing']],
        ['nodeSection4', ['lessmixinparameters', 'lessparameters', 'lessarguments', 'lessmixinarguments', 'lessparametricmixins']],
        ['nodeSection5', ['lessvariablearguments', 'lessvariableargumentslists', 'lessvargs', 'lessvaargs', 'lessvarguments']],
        ['nodeSection6', ['lessguards', 'lessguarding', 'lessmixinguards']],
        ['nodeSection7', ['lessdetachedrulesets']]
    ]
);
addNode(
    ['Programming languages', 'Less', 'Rules and properties'],
    'data/node-0489.htm',
    [
        ['nodeSection1', ['lessrules', 'lessrulesets', 'lessnestedrules', 'less&amp;', 'lessnesting', 'lessnestedstyles']],
        ['nodeSection2', ['lessruleguards', 'lesstyleguards']],
        ['nodeSection3', ['lessproperties', 'lesspropertymerging', 'lessmergeproperties', 'lessmerging', 'lessconcatenating', 'lessjoining']]
    ]
);
addNode(
    ['Programming languages', 'Less', 'Variables'],
    'data/node-0490.htm',
    [
        ['nodeSection1', ['lessvariables', 'lessdefinevariables', 'lessvariabledefinitions', 'lessvariabledeclarations', 'lessdeclarevariables', 'lessassignvariables']],
        ['nodeSection2', ['lessusevariables', 'lessreferencevariables']],
        ['nodeSection3', ['lessscopes', 'lessscoping', 'lessvariablescopes', 'lessscopevariables', 'lessshadowing', 'lessshadowvariables', 'lessoverridevariables', 'lesscontexts', 'lessvariablecontexts']]
    ]
);
addNode(
    ['Programming languages', 'Node'],
    'data/node-0491.htm',
    []
);
addNode(
    ['Programming languages', 'Node', 'Core'],
    'data/node-0492.htm',
    []
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Assorted'],
    'data/node-0493.htm',
    [
        ['nodeSection1', ['nodeenvironments', 'nodeenvironmentvariables', 'nodesetenv', 'nodegetenv']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Buffers'],
    'data/node-0494.htm',
    [
        ['nodeSection1', ['nodebuffers', 'nodebufferdata', 'nodedatabuffer', 'nodeencoding', 'nodebufferencoding']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Console I/O'],
    'data/node-0495.htm',
    [
        ['nodeSection1', ['nodeconsoleoutput', 'nodeconsolelogging', 'nodeconsolewrite', 'nodeconsolewriting', 'nodelogging', 'nodestdout', 'nodestderr', 'nodetracing', 'nodetrace', 'nodeprinting']],
        ['nodeSection2', ['nodeinput', 'nodeconsoleinput', 'nodeconsolereading', 'nodestdin']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Databases - MongoDB'],
    'data/node-0496.htm',
    [
        ['nodeSection1', ['nodemongodb', 'nodemongoose', 'nodemongodbconnecting', 'nodemongooseconnecting']],
        ['nodeSection2', ['nodemongodbschema', 'nodemongodbdatamodel', 'nodemongooseschema', 'nodemongoosedatamodel', 'nodemongodbmodels', 'nodemongoosemodels']],
        ['nodeSection3', ['nodemongodbfields', 'nodemongoosefields', 'nodemongodbfielproperties', 'nodemongoosefieldproperties', 'nodemongodbproperties', 'nodemongooseproperties']],
        ['nodeSection4', ['nodemongodbvirtualfields', 'nodemongoosevirtualfields', 'nodemongodbcomputedfields', 'nodemongoosecomputedfields']],
        ['nodeSection5', ['nodemongodbindexes', 'nodemongooseindexes', 'nodemongodbindices', 'nodemongooseindices']],
        ['nodeSection6', ['nodemongodbfunctions', 'nodemongoosefunctions', 'nodemongodbschemafunctions', 'nodemongooseschemafunctions', 'nodemongodbmodelfunctions', 'nodemongoosemodelfunctions']],
        ['nodeSection7', ['nodemongodbselect', 'nodemongooseselect', 'nodemongodbcount', 'nodemongoosecount']],
        ['nodeSection8', ['nodemongodbinsert', 'nodemongooseinsert']],
        ['nodeSection9', ['nodemongodbupsert', 'nodemongooseupsert', 'nodemongodbupdate', 'nodemongooseupdate']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Databases - MySQL'],
    'data/node-0497.htm',
    [
        ['nodeSection1', ['nodedb', 'nodedatabases', 'nodesql', 'nodemysql', 'nodemysqlquery', 'nodemysqlcursor', 'nodemysqlselect', 'nodemysqlinsert', 'nodemysqldelete', 'nodemysqlupdate']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Debugging'],
    'data/node-0498.htm',
    [
        ['nodeSection1', ['nodedebugging', 'nodedebugger', 'nodeinsepctor']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['nodelinting', 'nodelinter']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Email'],
    'data/node-0499.htm',
    [
        ['nodeSection1', ['nodeemails', 'nodemails', 'nodemailing', 'nodeemailing', 'nodesendmails', 'nodesendemails', 'nodesmtpclient', 'nodemailer', 'nodeemailer', 'nodemailsender', 'nodeemailsender']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Events'],
    'data/node-0500.htm',
    [
        ['nodeSection1', ['nodeevents', 'nodeemitter', 'nodeeventemitter', 'nodeemitting', 'nodeeventemitting', 'nodeemitevents', 'nodeonevents', 'nodeeventhandler', 'nodeeventhandling', 'nodeonevents']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Files'],
    'data/node-0501.htm',
    [
        ['nodeSection1', ['nodefilesystems', 'nodefs', 'nodepaths', 'nodefilenames', 'nodedirnames', 'nodebasenames', 'nodefilepaths']],
        ['nodeSection2', ['nodefileproperties', 'nodefilesize', 'nodefileexists', 'nodeexistsfile', 'nodefilerename', 'noderenamefiles', 'nodemovefiles', 'nodefilemove']],
        ['nodeSection3', ['nodereadfiles', 'nodewritefiles', 'nodereadingfiles', 'nodewritingfiles', 'nodefilereading', 'nodefilewriting', 'nodefileopen', 'nodeopenfile']],
        ['nodeSection4', ['nodefilestreams', 'nodeinputfilestreams', 'nodeoutputfilestreams']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Function chaining'],
    'data/node-0502.htm',
    [
        ['nodeSection1', ['nodechains', 'nodechaining', 'nodefunctionchains', 'nodefunctionchaining', 'nodeasynclibrary', 'nodetasklibrary']],
        ['nodeSection2', ['nodearrays', 'nodeasyncarrays', 'nodearrayasync', 'nodearraysasync', 'nodeiteratearrays', 'nodeprocessarrays', 'nodelooparrays']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Modules'],
    'data/node-0503.htm',
    [
        ['nodeSection1', ['nodemodules', 'nodeexports', 'nodemoduleexport']],
        ['nodeSection2', ['nodeloadmodules', 'noderequiremodules', 'nodeimportmodules', 'nodeusemodules', 'nodeincludemodules']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Packages'],
    'data/node-0504.htm',
    [
        ['nodeSection1', ['nodenpm', 'nodepackagemanager', 'nodeinstallpackages', 'nodeupdatepackages', 'nodeuninstallpackages', 'nodepackageinstall', 'nodepackageupdate', 'nodepackageuninstall']],
        ['nodeSection2', ['nodepackagejson', 'nodepackageconfiguration', 'nodeconfigurepackages', 'nodeconfigpackages']],
        ['nodeSection3', ['nodeprivatepackages', 'nodeprivaterepository', 'noderepositoryprivate']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Processes'],
    'data/node-0505.htm',
    [
        ['nodeSection1', ['nodeprocesses', 'nodechildprocesses', 'nodesubprocesses', 'nodeexecutecommands', 'noderuncommands', 'nodecommands']],
        ['nodeSection2', ['nodespawn', 'nodefork', 'nodespawnprocesses', 'nodeforkprocesses', 'nodekillprocesses', 'nodeprocesskill']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Streams'],
    'data/node-0506.htm',
    [
        ['nodeSection1', ['nodestreams', 'nodeinputstreams', 'nodeiostreams', 'nodestreamencoding', 'nodepausestreams', 'noderesumestreams', 'nodestopstreams', 'nodesuspendstreams', 'nodereadstreams']],
        ['nodeSection2', ['nodeoutputstreams', 'nodewritestreams']],
        ['nodeSection3', ['nodepipes', 'nodepiping', 'nodestreampipe', 'nodestreampiping', 'nodepipestreams']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Timers'],
    'data/node-0507.htm',
    [
        ['nodeSection1', ['nodetimers', 'nodetimeout', 'nodeintervals', 'nodecronjob', 'nodechronjob', 'nodescheduler', 'nodescheduling']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Unit testing - Client'],
    'data/node-0508.htm',
    [
        ['nodeSection1', ['nodeunittests', 'nodeunittesting', 'nodeclienttests', 'nodeclienttesting', 'nodetestclientside', 'nodetesting', 'nodebrowsertest', 'nodetestbrowser', 'nodechai', 'nodemocha']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Core', 'Unit testing - Server'],
    'data/node-0509.htm',
    [
        ['nodeSection1', ['nodeunittests', 'nodeunittesting', 'nodeservertests', 'nodeservertesting', 'nodetestserverside', 'nodetesting', 'nodetap']],
        ['nodeSection2', ['nodemocha']],
        ['nodeSection3', ['nodeassertions', 'nodeasserting', 'nodeasserts']],
        ['nodeSection4', ['noderestclient', 'noderestapiclient', 'noderestfulclient', 'noderestfulapiclient', 'nodeapiclient', 'nodeapitest', 'noderesttest', 'noderestfultest', 'nodetestrestful']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express'],
    'data/node-0510.htm',
    []
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Clusters and failover'],
    'data/node-0511.htm',
    [
        ['nodeSection1', ['nodeclusters', 'nodeclustering', 'nodeparallelisation', 'nodeparallelization', 'nodevirtualisation', 'nodevirtualization', 'nodeloadbalancing', 'nodeloadbalancer']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['nodeerrorhandling', 'nodeerrorhandlers', 'nodedomains', 'nodeerrordomains', 'nodeexceptionhandling', 'nodeexceptionhandler', 'nodeexceptiondomains']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Cookies and sessions'],
    'data/node-0512.htm',
    [
        ['nodeSection1', ['nodecookies', 'nodesetcookies', 'nodegetcookies', 'nodecookiesget', 'nodecookieget', 'nodecookiesset', 'nodecookieget', 'nodecookieparser']],
        ['nodeSection2', ['nodesessions', 'nodesessioncookies', 'nodecookiesessions', 'nodeexpressessions', 'nodesessionhandling', 'nodesessionmanagement']],
        ['nodeSection3', ['nodepersistentsessions', 'nodepersistsessions', 'nodesessionstore', 'nodesessionsmongoose', 'nodesessionsmongodb']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Forms'],
    'data/node-0513.htm',
    [
        ['nodeSection1', ['nodeforms', 'nodepostforms', 'nodeformposts', 'nodeformposting', '']],
        ['nodeSection2', ['nodefileuploads', 'nodeuploads', 'nodeuploadfiles', 'nodeformidable']],
        ['nodeSection3', ['nodejqueryfileupload', 'nodejqueryupload', 'nodeuploadjquery', 'nodeuploadfilesjquery', 'nodeuploadfilejquery', 'nodefileuploadjquery']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Middleware'],
    'data/node-0514.htm',
    [
        ['nodeSection1', ['nodemiddleware']],
        ['nodeSection2', ['nodemiddlewarechains', 'nodemiddlewarechaining', 'nodechainmiddleware']],
        ['nodeSection3', ['nodestatic', 'nodeservestatic', 'nodebodyparser', 'nodelogging', 'nodelogger', 'nodemorgan', 'nodeexpresslogger']],
        ['nodeSection4', ['nodecustommiddlewares', 'nodeimplementmiddletwares']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Request and response'],
    'data/node-0515.htm',
    [
        ['nodeSection1', ['noderequests', 'nodehttprequests', 'nodereqestheaders', 'nodeheaders', 'noderequestobjects']],
        ['nodeSection2', ['noderesponses', 'nodehttpresponses', 'noderesponseheaders', 'noderesponseobjects', 'nodehttpstatuscodes', 'nodehttpresonsestatuscodes', 'nodestatuscodes', 'noderesponsestatuscodes']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'REST API'],
    'data/node-0516.htm',
    [
        ['nodeSection1', ['noderestfulapiservices', 'noderestapiservices', 'noderestservices', 'noderestfulservices']],
        ['nodeSection2', ['noderesthandlers', 'noderestroutes', 'noderesthandling']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['nodecors', 'nodecrossdomainresourcesharing']],
        ['nodeSection5', ['noderestclient', 'noderesttestclient', 'noderestfulclient', 'noderestfultestclient', 'noderestapiclient', 'noderestapitestclient', 'noderestfulapiclient', 'noderestfulapitestclient', 'noderestler']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Routing'],
    'data/node-0517.htm',
    [
        ['nodeSection1', ['noderouting', 'noderouttables', 'noderoutes']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['nodesubdomains', 'nodesubdomainrouting', 'noderoutingsubdomain', 'noderoutesubdoamin']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Syntax'],
    'data/node-0518.htm',
    [
        ['nodeSection1', ['nodeexpressserver', 'nodexpresserver', 'nodeserver', 'nodewebserver', 'nodehttpserver']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['nodeexpresshttps', 'nodeexpressssl', 'nodeexpresstls', 'nodexpresssl', 'nodehttps', 'nodetls', 'nodessl', 'nodehttpsserver']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Templates - Handlebars (Mustache)'],
    'data/node-0519.htm',
    [
        ['nodeSection1', ['nodetemplates', 'nodetemplating', 'nodetemplateengines', 'nodelayouts', 'nodelayoutengines', 'nodeviews', 'noderendering', 'nodehandlebars', 'nodemustache']],
        ['nodeSection2', ['nodehandlebarslayouts', 'nodehandlebarsmasterpages', 'nodehandlebarstemplates']],
        ['nodeSection3', ['nodehandlebarswidgets', 'nodehandlebarsreusablewidgets', 'nodehandlebarsreuseablewidgets', 'nodehandlebarspartials']],
        ['nodeSection4', ['nodehandlebarstemplates', 'nodehandlebarsviews', 'nodehandlebarspages']],
        ['nodeSection5', ['nodehandlebarsrendering']],
        ['nodeSection6', ['nodehandlebarssyntax', 'nodehandlebarsif', 'nodehandlebarsfor', 'nodehandlebarsloops', 'nodehandlebarscommands', 'nodehandlebarsvariables', 'nodehandlebarsparameters']],
        ['nodeSection7', ['']],
        ['nodeSection8', ['nodehandlebarsclientsiderendering', 'nodehandlebarsclientrendering', 'nodehandlebarsclientlibrary', 'nodehandlebarsclientsidelibrary']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Express', 'Templates - Pug (jade)'],
    'data/node-0520.htm',
    [
        ['nodeSection1', ['nodetemplates', 'nodetemplating', 'nodetemplateengines', 'nodelayouts', 'nodelayoutengines', 'nodeviews', 'noderendering', 'nodejade', 'nodepug', 'nodepugrendering']],
        ['nodeSection2', ['nodepugvariables', 'nodepugexpressions', 'nodepugcommands', 'nodepugsyntax', 'nodepugtags', 'nodepughtml', 'nodepugviews']],
        ['nodeSection3', ['nodepugcode', 'nodepuginlinecode']],
        ['nodeSection4', ['nodepugif', 'nodepugswitch', 'nodepugif', 'nodepugwhile', 'nodepugflowcontrol', 'nodepugcontrolstatements', 'nodepugstatements']],
        ['nodeSection5', ['nodepugmasterpages', 'nodepugmasterlayouts', 'nodpugwidgets', 'nodepuginheritance']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Networking'],
    'data/node-0521.htm',
    []
);
addNode(
    ['Programming languages', 'Node', 'Networking', 'HTTP Client'],
    'data/node-0522.htm',
    [
        ['nodeSection1', ['nodehttpclient', 'nodewebclient', 'nodehttptestclient']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['nodehttpsclient', 'nodehttpsrequest']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Networking', 'HTTP Server'],
    'data/node-0523.htm',
    [
        ['nodeSection1', ['nodewebserver', 'nodehttpserver']],
        ['nodeSection2', ['nodehttpsserver', 'nodehttpswebserver', 'nodetsslserver', 'nodesslwebserver', 'nodetlsserver', 'nodetlswebserver', 'nodetls', 'nodessl']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Networking', 'TCP Client'],
    'data/node-0524.htm',
    [
        ['nodeSection1', ['nodetcpclient', 'nodeclienttcp']],
        ['nodeSection2', ['nodetcpsclient', 'nodetcpclientssl', 'nodessltcpclient', 'nodetlstcpclient', 'nodetcptlsclient', 'nodeclienttcpssl', 'nodeclinettcptls']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Networking', 'TCP Server'],
    'data/node-0525.htm',
    [
        ['nodeSection1', ['nodetcpserver', 'nodeservertcp']],
        ['nodeSection2', ['nodetcpsserver', 'nodetcpsslserver', 'nodessltcpserver', 'nodetlstcpserver', 'nodetcptlsserver', 'nodeservertls', 'nodeserverssl']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Networking', 'UDP'],
    'data/node-0526.htm',
    [
        ['nodeSection1', ['nodeudpserver', 'nodeudpclient', 'nodedatagram', 'nodesendudp', 'nodeudpsender', 'nodeudpreceiver']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Node', 'Networking', 'WebSockes (Socket.IO)'],
    'data/node-0527.htm',
    [
        ['nodeSection1', ['nodewebsockets', 'nodesocketio', 'nodesocket.io', 'nodews', 'nodewebsocketserver', 'nodewebsocketsserver', 'nodewsserver']],
        ['nodeSection2', ['nodewebsocketclient', 'nodewebsocketsclient', 'nodewsclient']],
        ['nodeSection3', ['nodewebsocketsssl', 'nodewebsocketshttps', 'nodewebsocketstls']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Ruby'],
    'data/node-0528.htm',
    []
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced'],
    'data/node-0529.htm',
    []
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'Built-in variables'],
    'data/node-0530.htm',
    [
        ['nodeSection1', ['rbbuiltinvariables', 'rbargv', 'rbenv', 'rbenvironmentvariables', 'rbpid']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'Databases'],
    'data/node-0531.htm',
    [
        ['nodeSection1', ['rbdb', 'rbdbs', 'rbdbms', 'rbdatabases', 'rbsql', 'rbembeddedsql', 'rbpreparedstatements', 'rbjdbc', 'rbsqlite3']],
        ['nodeSection2', ['rbsequel', 'rpmysql', 'rbpostgresql', 'rborm', 'rbhibernate', 'rbjooq']],
        ['nodeSection3', ['rbactiverecord']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'ERB templating'],
    'data/node-0532.htm',
    [
        ['nodeSection1', ['rberb', 'rbembeddedruby', 'rbtemplates', 'rbtemplating', 'rbtemplateengine', 'rbtemplatesengine', 'rbtemplatingengine']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'Eval'],
    'data/node-0533.htm',
    [
        ['nodeSection1', ['rbeval', 'rbevaluate', 'rbevaluation', 'rbdynamiccodeexecution']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'HTML and XML'],
    'data/node-0534.htm',
    [
        ['nodeSection1', ['rbhtml', 'rbparsehtml', 'rbhtmlparsing', 'rbhtmlparser']],
        ['nodeSection2', ['rbxml', 'rbparsexml', 'rbxmlparser', 'rbxmlparsing']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'Processes'],
    'data/node-0535.htm',
    [
        ['nodeSection1', ['rbsystem', 'rbexecutecommands', 'rbruncommands', 'rbpipes', 'rbspawnprocesses', 'rbprocesses']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['rbfork', 'rbforking', 'rbforkprocesses']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'Reflections'],
    'data/node-0536.htm',
    [
        ['nodeSection1', ['rbflections', 'rbintrospection']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'Threads and fibers'],
    'data/node-0537.htm',
    [
        ['nodeSection1', ['rbthreads', 'rbmultithreading', 'rbstartthreads', 'rbstopthreads', 'rblistthreads']],
        ['nodeSection2', ['rbfibers', 'rbiterators']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Advanced', 'ZIP compression'],
    'data/node-0538.htm',
    [
        ['nodeSection1', ['rbzip', 'rbunzip', 'rbzippinng', 'rbunzipping', 'rbzipfiles', 'rbunzipfiles', 'rbzlib', 'rbcompress', 'rbcompression', 'rbcompressfiles', 'rbuncompress', 'rbuncompression', 'rbuncompressfiles', 'rbdeflate', 'rbdefalation', 'rbdeflatefiles', 'rbinflate', 'rbinflation', 'rbinflatefiles']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core'],
    'data/node-0539.htm',
    []
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Control structures'],
    'data/node-0540.htm',
    [
        ['nodeSection1', ['rbcontrolstructures', 'rbflowcontrol', 'rbif', 'rbifelse', 'rbelse', 'rbunless', 'rbunlesselse', 'rbconditions', 'rbconditional']],
        ['nodeSection2', ['rbswitchcase', 'rbcasestatement', 'rbcasewhen', 'rbwhen']],
        ['nodeSection3', ['rbfor', 'rbloops', 'rblooping', 'rbforeach', 'rbtimes', 'rbrepeating', 'rbrepetition', 'rbbreak', 'rbcontinue', 'rbredo', 'rbcountloop']],
        ['nodeSection4', ['rbinfiniteloops', 'rbendlessloops']],
        ['nodeSection5', ['rbwhile', 'rbuntil']],
        ['nodeSection6', ['']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Exceptions'],
    'data/node-0541.htm',
    [
        ['nodeSection1', ['rbexceptions', 'rberrors', 'rbexceptionhandling', 'rberrorhandling', 'rbtrycatch', 'rbcatchexceptions', 'rbcatcherrors', 'rbthrowexceptions', 'rbthrowerrors', 'rbraiseexceptions', 'rbraiseerrors', 'rbrescueexceptions', 'rbrescueerrors', 'rberrrorclasses', 'rbexceptionclasses']],
        ['nodeSection2', ['rbstandardexceptions', 'rbbuiltinexceptions', 'rbdefaultexceptions', 'rbstandardexceptionclasses', 'rbbuiltinexceptionclasses', 'rbdefaultexceptionclasses']],
        ['nodeSection3', ['rbexceptioninfo', 'rberrorinfo', 'rbgetlasterrors', 'rbgeterrors', 'rbgetlastexceptions', 'rbgetlasterrors', 'rbgetpreviouserrors', 'rbgetpreviousexceptions']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Functions'],
    'data/node-0542.htm',
    [
        ['nodeSection1', ['rbfunctions', 'rbdef']],
        ['nodeSection2', ['rbparameters', 'rbfuntionparameters', 'rbdefaultparameters', 'rbnamedparameters', 'rboptions', 'rboptionparameters', 'rboptionalparameters', 'rbvargs', 'rbvariableargs', 'rbvariableargumentlist']],
        ['nodeSection3', ['rbreturnvalues', 'rbmultiplereturnvalues', '']],
        ['nodeSection4', ['rbcodeblocks', 'rblambdas', 'rbyieldfunctions', 'rbyieldparameters', 'rbcallbacks', 'rbcallbackfunctions']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'I/O and files'],
    'data/node-0543.htm',
    [
        ['nodeSection1', ['rbconsole', 'rbprint', 'rbprintln', 'rbprintf', 'rbputs', 'rbp', 'rbpp', 'rbgets', 'rbreadlines', 'rbconsole', 'rbstdin', 'rbstdout', 'rbio', 'rbecho&nbsp;', 'rbfs', 'rbfieldseparators', 'rbofs', 'rboutputfieldseparators', 'rbifs', 'rbinputfieldseparators', 'rbrs', 'rbrecordseparators', 'rbors', 'rboutputrecordseparators', 'rbirs', 'rbinputrecordseparators']],
        ['nodeSection2', ['rbfiles', 'rbreadfiles', 'rbwritefiles', 'rbloadfiles', 'rbopenfiles', 'rbclosefiles', 'rbeof', 'rbflushfiles', 'rbpositionfiles', 'rbfileposition', 'rbseekfiles']],
        ['nodeSection3', ['rbpaths', 'rbfilepaths', 'rbpathutility', 'rbpathutilities']],
        ['nodeSection4', ['rbfilesystem', 'rbfileexists', 'rbextistfiles', 'rbfilesize', 'rbgetfilesize', 'rbrenamefiles', 'rbdeletefiles', 'rbpwd', 'rbgetdirectory', 'rbgetdirectories', 'rbgetcurrentdirectory', 'rblistfiles', 'rblistdirectory', 'rblistdirectories', 'rbtraversedirectories', 'rbcd', 'rbchangedirectory', 'rbmkdir', 'rbmakedirectory', 'rbmakedirectories', 'rbcreatedirectory', 'rbcreatedirectories', 'rbdeletedirectory', 'rbdeletedirectories', 'rbremovedirectory', 'rbremovedirectories']],
        ['nodeSection5', ['rbtemp', 'rbtmp', 'rbtempfiles', 'rbtmpfiles', 'rbtemporaryfiles', 'rbcreatetmpfiles', 'rbcreatetempfiles', 'rbcreatetemporaryfiles', 'rbtempdirectory', 'rbtmpdirectory', 'rbgettempdirectory', 'rbgettmpdirectory']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Modules'],
    'data/node-0544.htm',
    [
        ['nodeSection1', ['rbmodules', 'rbnamespaces', 'rbincludemodules', 'rbincludenamespaces']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Operators'],
    'data/node-0545.htm',
    [
        ['nodeSection1', ['rb', 'rb-', 'rb*', 'rb/', 'rb%', 'rb**', 'rboperators', 'rbarithmethicoperators', 'rbcalculate', 'rbcalculations', 'rbadd', 'rbsubtract', 'rbmultiply', 'rbdivide', 'rbmodulo', 'rbpower']],
        ['nodeSection2', ['rbcomparisonoperators', 'rbequaloperators', 'rbequalsoperators', 'rbequality']],
        ['nodeSection3', ['rblogicaloperators', 'rb&amp;&amp;', 'rband', 'rb||', 'rbor', 'rbbnot']],
        ['nodeSection4', ['rbbitwiseoperators', 'rbxor']],
        ['nodeSection5', ['rbassignmentoperators', 'rbassignments']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['rb?:', 'rbternaryoperators', 'rb::', 'rbscoperesolutionoperator']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Require'],
    'data/node-0546.htm',
    [
        ['nodeSection1', ['rbrequire', 'rblibraries']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Core', 'Variables'],
    'data/node-0547.htm',
    [
        ['nodeSection1', ['rbvariables', 'rbvariablenames', 'rbnamingconventions', 'rbconstants', 'rbnames']],
        ['nodeSection2', ['rbliterals', 'rbtrue', 'rbfalse', 'rbnil', 'rbnull', 'rbsymbols']],
        ['nodeSection3', ['rbtypechecks', 'rbdefined', 'rbifdefined', 'rbcheckifdefined', 'rbundefined', 'rbifundefined', 'rbisaclass', 'rbisclass', 'rbkindofclass', 'rbinstanceofclass', 'rbtypeof']],
        ['nodeSection4', ['rbcast', 'rbconversion', 'rbtypeconversion', 'rbtointeger', 'rbtostring', 'rbtosymbol']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes'],
    'data/node-0548.htm',
    []
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Arrays and hashes'],
    'data/node-0549.htm',
    [
        ['nodeSection1', ['rbcollections', 'rbcontainers', 'rbarrays', 'rbdecomposearrays', 'rbdestructurearrays', 'rbarraydecompose', 'rbarraydecomposition', 'rbarraydestructure']],
        ['nodeSection2', ['rbqueues', 'rbstacks', 'rbpush', 'rbpushelements', 'rbpop', 'rbpopelements', 'rbshift', 'rbshiftelements', 'rbunshift', 'rbunshiftelements']],
        ['nodeSection3', ['rbarrayoperatios', 'rbaddarrays', 'rbsubtractarrays']],
        ['nodeSection4', ['rbhashes', 'rbhashtables']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Classes'],
    'data/node-0550.htm',
    [
        ['nodeSection1', ['rbclasses']],
        ['nodeSection2', ['rbclassproperties', 'rblcassproperty', 'rbproperties', 'rbproperty', 'rbclassattributes', 'rbattributes', 'rbaccessors', 'rbreaders', 'rbwriters', 'rbconstructors', 'rbgetters', 'rbsetters', 'rbautomaticproperty', 'rbautomaticproperties', 'rbautomaticattributes', 'rbmanualproperties', 'rbmanualproperty', 'rbmanualattribute']],
        ['nodeSection3', ['rbstaticmethods', 'rbstaticclasses', 'rbstaticfunctions', 'rbstaticproperties', 'rbstaticproperty', 'rbstaticattributes']],
        ['nodeSection4', ['rbinheritance', 'rbparentclasses', 'rbchildclasses']],
        ['nodeSection5', ['rboperatoroverloading', 'rboverloadoperators']],
        ['nodeSection6', ['rbprivate', 'rbprotected', 'rbpublic', 'rbacl', 'rbaccesscontrol', 'rbvisibility', 'rbprotection', 'rbaccessmodifiers']],
        ['nodeSection7', ['rbnestedclasses', 'rbinnerclasses', 'rbnestclasses', 'rbstaticlasses']],
        ['nodeSection8', ['']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Classes - Extensions'],
    'data/node-0551.htm',
    [
        ['nodeSection1', ['rbextensions', 'rbextensionmethods', 'rbextensionclasses', 'rbextensionfunctions', 'rboverwritefunctions', 'rboverwritemethods', 'rboverwriteclasses', 'rboverridefunctions', 'rboverridemethods', 'rboverrideclasses', 'rboverwriting', 'rboverriding']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Classes - Mixins'],
    'data/node-0552.htm',
    [
        ['nodeSection1', ['rbmixins']],
        ['nodeSection2', ['rbcomparable', 'rbcompareoperator', 'rbcomparisonoperator']],
        ['nodeSection3', ['rbenumerable', 'rbstreamapi', 'rbstreams']],
        ['nodeSection4', ['rball', 'rbhasany', 'rbany', 'rbanymatch', 'rbhasnone', 'rbnone', 'rbnonematch', 'rbone', 'rbhasone', 'rbonematch', 'containselements', 'rbmember']],
        ['nodeSection5', ['rbmapelements', 'rbflatmapelements', 'rbmapcollections', 'rbflatmapcollections', 'rbmaparrays', 'rbflatmpaarraus', 'rbmapping', 'rbflatmapping']],
        ['nodeSection6', ['rbsorting', 'rbsortcollections', 'rbsortarrays', 'rbsortby']],
        ['nodeSection7', ['rbreduce', 'rbreducing', 'rbreducecollections', 'rbreducearrays', 'rbaggregatecollections', 'rbaggregatearrays']],
        ['nodeSection8', ['rbfiltering', 'rbfiltercollections', 'rbfilterarrays', 'rbfilterlements', 'rbfilteringout', 'rbfilterout', 'rbfilteroutcollections', 'rbfilteroutarrays', 'rbfilteroutelements', 'rbfinding', 'rbfindelements', 'rbfindcollecions', 'rbfindarrays', 'rbgrepping', 'rbgrepcollections', 'rbgreparrays', 'rbunique', 'rbdeleteduplicates', 'rbdeletedups', 'rbremoveduplicates', 'rbremovedups&nbsp;', 'rbdeleteelements', 'rbdropelements', 'rbfirstelements', 'rbtakeelements', 'rbmaximum', 'rbfindmaximum', 'rbminimum', 'rbfindminimum', 'rbfindlargestelement', 'rbfindgreatestelement', 'rbfindsmalleselement', 'rbsmalleselement', 'rblargestelement', 'rbgreatestelements']],
        ['nodeSection9', ['rbpartitioning', 'rbpartitioncollections', 'rbpartitionarrays', 'rbpartitionelements', 'rbgouping', 'rbgroupcollections', 'rbgrouparrays', 'rbgroupelements', 'rblicing', 'rbslicearrays', 'rbslicecollections', 'rbsliceelements', 'rbchunking', 'rbchunkcollections', 'rbchunkarrays', 'rbchunkelements']],
        ['nodeSection10', ['rbiteratateelements', 'rbiteratecollections', 'rbiteratearrays', 'rbloopelements', 'rbloopcollections', 'rblooparrays', 'rbcycleelements', 'rbcyclecollections', 'rbcyclearrays', 'rbtraverse', 'rbtraverseelements', 'rbtraversecollections', 'rbtraversearrays']],
        ['nodeSection11', ['rbconcatenatecollections', 'rbconcatenatearrays', 'rbchaincollections', 'rbchainarrays', 'rblazy']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Date and time'],
    'data/node-0553.htm',
    [
        ['nodeSection1', ['rbdateandtime', 'rbdatetime', 'rbtime', 'rbcurrenttime', 'rbgetcurrenttime', 'rbtimezones', 'rbconverttimes', 'rbconvertdates', 'rblocaltime']],
        ['nodeSection2', ['rbcronic', 'rbparsedates', 'rbparsetime', 'rbparsedateandtime']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'JSON, YAML, CVS, PStore'],
    'data/node-0554.htm',
    [
        ['nodeSection1', ['rbjson', 'rbstringifyjson', 'rbparsejson']],
        ['nodeSection2', ['rbyaml', 'rbstringifyyaml', 'rbparseyaml']],
        ['nodeSection3', ['rbcsv', 'rbstringifycsv', 'rbparsecsv']],
        ['nodeSection4', ['rbpstore', 'rbserialiseobjects', 'rbsercializeobjects', 'rbserialisation', 'rbserialization']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Ranges'],
    'data/node-0555.htm',
    [
        ['nodeSection1', ['rbranges']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Strings and RegExp'],
    'data/node-0556.htm',
    [
        ['nodeSection1', ['rbstrings', 'rbstringliterals', 'rbmultilinestrings', 'rbuppercase', 'rbtouppercase', 'rblowercase', 'rbtolowercase', 'rbtrim', 'rbtrimstrings', 'rbstrip', 'rbstripstrings', 'rbchomp', 'rbchompstrings', 'rbcop', 'rbchopstrings', 'rbsplitstrings', 'rbcharacters']],
        ['nodeSection2', ['rbregexp', 'rbregularexpressions', 'rbmatch', 'rbmatching', 'rbmatchstrings', 'rbmatchregularexpressions', 'rbsearchandreplace', 'rbreplace', 'rbsearch', 'rbsub', 'rbgsub', 'rbscanstrings']],
        ['nodeSection3', ['rblastmatchinfo', 'rbprematch', 'rbpostmatch', 'rbbeforematch', 'rbaftermatch']],
        ['nodeSection4', ['rbscanstrings', 'rbstrcan', 'rbstringscanner']],
        ['nodeSection5', ['rbbase64']],
        ['nodeSection6', ['rbdigest', 'rbsha2', 'rbmd5', 'rbhexdigest']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Data and classes', 'Structs'],
    'data/node-0557.htm',
    [
        ['nodeSection1', ['rbstructs', 'rbdyanmicclasses', 'rbgenericclasses']],
        ['nodeSection2', ['rbopenstruct']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking'],
    'data/node-0558.htm',
    []
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'CGI'],
    'data/node-0559.htm',
    [
        ['nodeSection1', ['rbcgi']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'DNS'],
    'data/node-0560.htm',
    [
        ['nodeSection1', ['rbdnslookup', 'rblookupdns', 'rbdnsquery', 'rbresolvehostnames', 'rbreverselookup']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'Email'],
    'data/node-0561.htm',
    [
        ['nodeSection1', ['rbemails', 'rbmails', 'rbpop3', 'rbreceivemails', 'rbreceiveemails']],
        ['nodeSection2', ['rbsmtp', 'rbsendmails', 'rbsendemails']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'FTP'],
    'data/node-0562.htm',
    [
        ['nodeSection1', ['rbftp']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'HTTP'],
    'data/node-0563.htm',
    [
        ['nodeSection1', ['rbhttp', 'rbhttpservers', 'rbwebrick', 'httprest', 'httprestserver']],
        ['nodeSection2', ['rbhttpclient', 'rbajax', 'rbxhr', 'httprestclient']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'Ping'],
    'data/node-0564.htm',
    [
        ['nodeSection1', ['rbping']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'TCP/IP'],
    'data/node-0565.htm',
    [
        ['nodeSection1', ['rbtcpip', 'rb', 'rbtcpclients', 'rbtcpipclients', 'rbtcpconnections', 'rbtcpipconnections']],
        ['nodeSection2', ['rbtcpservers', 'rbtcpipservers', 'rbtcpserversockets', 'rbtcpipserversockets']],
        ['nodeSection3', ['rbgserver']],
        ['nodeSection4', ['rbwebrick']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'UDP'],
    'data/node-0566.htm',
    [
        ['nodeSection1', ['rbudp', 'rbudpservers', 'rudbsockets', 'rudbserversockets']],
        ['nodeSection2', ['rbudpclients', 'rudpclientsockets']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Networking', 'URLs'],
    'data/node-0567.htm',
    [
        ['nodeSection1', ['rburls', 'rbparseurls', 'rburis', 'rbparseuris']],
        ['nodeSection2', ['rbcreateuris', 'rbcreateurls', 'rbconstruturis', 'rbconstructurls', 'rburlbuilder', 'rburibuilder']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling'],
    'data/node-0568.htm',
    []
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling', 'Gems'],
    'data/node-0569.htm',
    [
        ['nodeSection1', ['rgems', 'rbinstallgems', 'rbupdategems', 'rbremovegems', 'rbdeletegems', 'rbuninstallgems', 'rbaddgems']],
        ['nodeSection2', ['rbbundler', 'rbdependencies']],
        ['nodeSection3', ['rbcreategems', 'rbpackagegems', 'rbpublishgems']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling', 'Logging'],
    'data/node-0570.htm',
    [
        ['nodeSection1', ['rblogging', 'rblogger', 'rblogmessages', 'rbwritelogmessages', 'rbwritelogs']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling', 'Profiling'],
    'data/node-0571.htm',
    [
        ['nodeSection1', ['rbprofiler', 'rbprofiling']],
        ['nodeSection2', ['rbbenchmarking', 'rbbenchmarks']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling', 'RBS declarations'],
    'data/node-0572.htm',
    [
        ['nodeSection1', ['rbrbs', 'rbdeclarations', 'rbdeclarationfiles', 'rbambientdeclarations', 'rbheaderfiles', 'rbheaders', 'rbtypes', 'rbtypesystem']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling', 'RDoc'],
    'data/node-0573.htm',
    [
        ['nodeSection1', ['rddocs', 'rbdocumentation', 'rbdocumeting', 'rbcodecomments', 'rbjavadoc']]
    ]
);
addNode(
    ['Programming languages', 'Ruby', 'Tooling', 'Unit tests'],
    'data/node-0574.htm',
    [
        ['nodeSection1', ['rbtests', 'rbtesting', 'rbminitest', 'rbunittests']]
    ]
);
addNode(
    ['Programming languages', 'Sass'],
    'data/node-0575.htm',
    []
);
addNode(
    ['Programming languages', 'Sass', 'Assorted'],
    'data/node-0576.htm',
    [
        ['nodeSection1', ['sasscommands', 'sassformats', 'sassconvertfiles', 'sassconvertformats', 'sassformats', 'sassconversion', 'sassoptions', 'sasssettings']],
        ['nodeSection2', ['sasscomments']],
        ['nodeSection3', ['sassnamespaces', 'sasswith', 'sassprefixing', 'sassprefixed']],
        ['nodeSection4', ['sassincludes', 'sassimports', 'sassincludefiles', 'sassimportfiles', 'sassembedfiles', 'sassembedding']],
        ['nodeSection5', ['sassdebugging', 'sasslogging', 'sasslogmessages', 'sassdebugmessages', 'sassconsole']]
    ]
);
addNode(
    ['Programming languages', 'Sass', 'Control structures'],
    'data/node-0577.htm',
    [
        ['nodeSection1', ['sasscontrolstructures', 'sassconditionalprocessing', 'sassifstatements', 'sassifcommands', 'sassifthenelse', 'sassifelse', 'sasselseif', 'sassswitchcase']],
        ['nodeSection2', ['sassloops', 'sasslooping', 'sassiterations', 'sassiterating', 'sasslooplists', 'sassiteratelists', 'sassloopmaps', 'sassiteratemaps', 'sassloopcollections', 'sassiteratecollections']]
    ]
);
addNode(
    ['Programming languages', 'Sass', 'Functions'],
    'data/node-0578.htm',
    [
        ['nodeSection1', ['sassfunctions', 'susscustomfunctions', 'sassdefinefunctions']]
    ]
);
addNode(
    ['Programming languages', 'Sass', 'Rules - Inheritance'],
    'data/node-0579.htm',
    [
        ['nodeSection1', ['sassrules', 'sassinheritance', 'sassderiverules', 'sassderivedrules', 'sassbaserules', 'sassbaseclasses', 'sassderiveclasses', 'sassinheritedrules', 'sassinheritedclasses']]
    ]
);
addNode(
    ['Programming languages', 'Sass', 'Rules - Mixins'],
    'data/node-0580.htm',
    [
        ['nodeSection1', ['sassrules', 'sassmixins', 'sasswidgets', 'sasscomoponents', 'sasslibraries', 'sasslibrary', 'sasslibs']],
        ['nodeSection2', ['sassmixinparameters', 'sassparameters', 'sassnamedparameters', 'sassarguments']],
        ['nodeSection3', ['sassvargs', 'sassvaargs', 'sassvariableargumentlist', 'sassvariableargumentslist']],
        ['nodeSection4', ['sasscontent', 'sassmixincontent']]
    ]
);
addNode(
    ['Programming languages', 'Sass', 'Rules - Nesting'],
    'data/node-0581.htm',
    [
        ['nodeSection1', ['sassrules', 'sassnestedrules', 'sassnesting']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Sass', 'Variables'],
    'data/node-0582.htm',
    [
        ['nodeSection1', ['sassvariables']],
        ['nodeSection2', ['sassdatatypes', 'sasstypes']],
        ['nodeSection3', ['sasslists', 'sassjoinlists', 'sassappendlists']],
        ['nodeSection4', ['sassmaps', 'sassmapget', 'sassmap-get', 'sassmapmerge', 'sassmap-merge', 'sassgetmaps', 'sassmergemaps', 'sassinspect', 'sassinspectmaps', 'sassmap-inspect']],
        ['nodeSection5', ['sasscolours', 'sasscolors']],
        ['nodeSection6', ['sassoperations', 'sassoperators', 'sasscompare', 'sasscomparisons']]
    ]
);
addNode(
    ['Programming languages', 'Scala'],
    'data/node-0583.htm',
    []
);
addNode(
    ['Programming languages', 'Scala', 'Classes'],
    'data/node-0584.htm',
    [
        ['nodeSection1', ['tags']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Classes', 'Classes'],
    'data/node-0585.htm',
    [
        ['nodeSection1', ['scalaclasses']],
        ['nodeSection2', ['scalaconstructors', 'scalaprimaryconstructors', 'scalasecondaryconstructors', 'scalaauxiliaryconstructors', 'scalaauxilliaryconstructors', 'scalafactory', 'scalafactories', 'scalafactorymethods', 'scalafactorymethods', 'scalaconstructorfactory', 'scalaconstructorfactories']],
        ['nodeSection3', ['scalapropery', 'scalaproperties', 'scalaclassproperty', 'scalaclassproperties', 'scalaattributes', 'scalaclassattributes', 'scalaaccessors', 'scalapropertyaccessors', 'scalagetters', 'scalasetters']],
        ['nodeSection4', ['scalacaseclasses', 'scaladataclasses']],
        ['nodeSection5', ['scalavalueclasses', 'scalavaluewrappers']],
        ['nodeSection6', ['scalastaticmethods', 'scalastaticclassmethods', 'scalastaticproperty', 'scalastaticproperties', 'scalastaticattributes', 'scalastaticclassproperty', 'scalastaticclassproperties', 'scalastaticclassattributes', 'scalastatic', 'scalasingletonclasses', 'scalasingletonds', 'scalacompanionobjects']],
        ['nodeSection7', ['scalamodifiers', 'scalaccessmodifiers', 'scalapublic', 'scalaprotected', 'scalaprivate', 'scalasealed', 'scalafinalclasses', 'scalafinal']],
        ['nodeSection8', ['scalaexports', 'scalaexportmethods', 'scalareexports', 'scalareexportfunctions', 'scalareexportmethods']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Classes', 'Extension methods'],
    'data/node-0586.htm',
    [
        ['nodeSection1', ['scalaextensionmethods', 'scalaextendclasses', 'scalaaugmentation', 'scalaoverlays', 'scalaoverlaymethods', 'scalaaugmentclasses', 'scalaclassaugmentation']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Classes', 'Generics'],
    'data/node-0587.htm',
    [
        ['nodeSection1', ['scalagenerics', 'scalagenericclasses']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Classes', 'Inheritance and traits'],
    'data/node-0588.htm',
    [
        ['nodeSection1', ['scalainheritance', 'scalainheritclasses']],
        ['nodeSection2', ['scalainterfaces', 'scalatraits', 'scalaabstractclasses']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Classes', 'Operator overloading'],
    'data/node-0589.htm',
    [
        ['nodeSection1', ['scalaoperatoroverloading', 'scalaoverloadoperators']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core'],
    'data/node-0590.htm',
    [
        ['nodeSection1', ['tags']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Assertions'],
    'data/node-0591.htm',
    [
        ['nodeSection1', ['scalaassertions', 'scalaassert', 'scalarequire', 'scalarequireparameters', 'scalaensuring', 'scalaasserting']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Collection operations'],
    'data/node-0592.htm',
    [
        ['nodeSection1', ['scalacollectionoperations', 'scalastreamapi', 'scalachecks', 'scalaisempty', 'scalaisnotempty', 'scalalength', 'scalasize', 'scalacollectionsize', 'scalacollectionlength', 'scalaallmatch', 'scalanonematch', 'scalahasany', 'scalasomematch']],
        ['nodeSection2', ['scalasort', 'scalastorting', 'scalasortcollections', 'scalareverse', 'scalareversing', 'scalareversecollections']],
        ['nodeSection3', ['scalamapping', 'scalavaluemapping', 'scalacollectionmapping', 'scalamapvalues', 'scalamapcollections', 'scalaflatmap', 'scalamap']],
        ['nodeSection4', ['scalafiltering', 'scalafilter', 'scalafiltercollections', 'scalafiltervalues', 'scalahead', 'scalalast', 'scalafirst', 'scalatail', 'scalatake', 'scaladrop', 'scalaunique', 'scalaremoveduplicates', 'scaladistinct']],
        ['nodeSection5', ['scalachunking', 'scalachunkcollections', 'scalapartitioning', 'scalapartitioncollections', 'scalagrouping', 'scalagroupcollections']],
        ['nodeSection6', ['scalazipping', 'scalazipcollections', 'scalacombinecollections', 'scalamerging', 'scalamerge', 'scalamergecollections']],
        ['nodeSection7', ['scalareduce', 'scalareducing', 'scalareducecollections', 'scalaaggregate', 'scalaaggregagecollections', 'scalasum', 'scalasumcollections', 'scalamin', 'scalamax', 'scalafolding', 'scalafoldcollections', 'scalafoldleft', 'scalafoldright', 'scalacollectiontostring']],
        ['nodeSection8', ['scalaiterating', 'scalaiterate', 'scalaiteratecollections', 'scalatraverse', 'scalatraversal', 'scalatraversecollections']],
        ['nodeSection9', ['scalacollectors']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Collections'],
    'data/node-0593.htm',
    [
        ['nodeSection1', ['scalacollections', 'scalamutable', 'scalamutablecollections', 'scalaimmutable', 'scalaimmutablecollections']],
        ['nodeSection2', ['scalacreatecollections', 'scalainitialisecollections', 'scalainitializecollections', 'scalacreateemptycollections', 'scalaconcatenatecollections', 'scalaappendcollections', 'scalajoincollections', 'scalapopulatecollections']],
        ['nodeSection3', ['scalatoarray', 'scalatolist', 'scalatoset', 'scalatomap', 'scalaconvertcollections']],
        ['nodeSection4', ['scalaiterators', 'scalaiteratorhasnext', 'scalaiteratornext']],
        ['nodeSection5', ['scalaarrays']],
        ['nodeSection6', ['scalaarraybuilder', 'scalarraybuffer', 'scalabuildarrays', 'scalaconstructarrays', 'scalacreatearrays']],
        ['nodeSection7', ['scaltuples', 'scalpairs']],
        ['nodeSection8', ['scalalists', 'scalalinkedlists']],
        ['nodeSection9', ['scalalistbuffers', 'scalalistbuilders', 'scalacreatelists', 'scalacresatelinkedlists', 'scalaconstructlists', 'scalaconstructrlinkedlists', 'scalainitialiselists', 'scalainitializelists', 'scalainitialiselinkedlists', 'scalainitializelinkedlists']],
        ['nodeSection10', ['scalasets', 'scalahashsets']],
        ['nodeSection11', ['scalamaps', 'scalahashmaps']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Control structures'],
    'data/node-0594.htm',
    [
        ['nodeSection1', ['scalacontrolstructures', 'scalaif', 'scalaelse', 'scalaifelse', 'scalaconditionalprocessing']],
        ['nodeSection2', ['scalaswitch', 'scalaswitchcase', 'scalacase', 'scalacasewhen', 'scalapatternmatching']],
        ['nodeSection3', ['scalaloops', 'scalafor', 'scalaforloops', 'scalaforeach', 'scalayield']],
        ['nodeSection4', ['scalawhile', 'scalawhileloops', '']],
        ['nodeSection5', ['scaladowhile', 'scaladowhileloops']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Exceptions'],
    'data/node-0595.htm',
    [
        ['nodeSection1', ['scalaexceptions', 'scalaexceptionhandling', 'scalathrow', 'scalathrowexceptions', 'scalacatch', 'scalacatchexceptions', 'scalafinally', 'scala???']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Functions'],
    'data/node-0596.htm',
    [
        ['nodeSection1', ['scalafunctions', 'scaladefs']],
        ['nodeSection2', ['scalaparameters', 'scalafunctionparameters', 'scaladefaultparameters', 'scalanamedparameters']],
        ['nodeSection3', ['scalavargs', 'scalavariableargumentlist', 'scalavariablearguments']],
        ['nodeSection4', ['scalacurrying', 'scalacurriedfunctions', 'scalacurryfunctions']],
        ['nodeSection5', ['scalanestedfunctions', 'scalalambdas', 'scalanestfunctions']],
        ['nodeSection6', ['scalalambdas', 'scalalambdafunctions', 'scalaarrowfunctions', 'scalafunctionliterals']],
        ['nodeSection7', ['scalarecursions', 'scalatailrecursions', 'scalarecursivefunctions', 'scalarecursivemethods']],
        ['nodeSection8', ['']],
        ['nodeSection9', ['scalagenericfunctions']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Operators'],
    'data/node-0597.htm',
    [
        ['nodeSection1', ['scalaoperators', 'scalaarithmeticoperators', 'scalacalculations', 'scalacalultionoperators', 'scalamodulo']],
        ['nodeSection2', ['scalacomparisonoperators', 'scalaequality', 'scalaequals']],
        ['nodeSection3', ['scalaand', 'scalaor', 'scalalogicaloperators']],
        ['nodeSection4', ['scalabitwiseoperators', 'scalabitshift', 'scalashiftoperators', 'scalabitoperators']],
        ['nodeSection5', ['scalaoperatorprecedence', 'scalaprecedence']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Other'],
    'data/node-0598.htm',
    [
        ['nodeSection1', ['scalaprintln', 'scalaprint', 'scalaconsoleoutput', 'scalaprintline']],
        ['nodeSection2', ['scalamain', 'scalamains', 'scalamainprograms']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Packages'],
    'data/node-0599.htm',
    [
        ['nodeSection1', ['scalapackages', 'scalacreatepackages']],
        ['nodeSection2', ['scalaimport', 'scalaimports', 'scalaimportpackages', 'scalaimportclasses']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Unit tests'],
    'data/node-0600.htm',
    [
        ['nodeSection1', ['scalaunittests', 'scalatesting', 'scalatestautomation', 'scalaanyfunsuite']],
        ['nodeSection2', ['scalaanyflatspec']],
        ['nodeSection3', ['scalaspec2', 'scalaspecs2']],
        ['nodeSection4', ['scalaanyfeaturespec']],
        ['nodeSection5', ['scalaanywordspec']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Core', 'Variables and types'],
    'data/node-0601.htm',
    [
        ['nodeSection1', ['scaladatatypes', 'scalaboolean', 'scalabyte', 'scalashort', 'scalaint', 'scalainteger', 'scalalong', 'scalachar', 'scalafloat', 'scaladouble', 'scalanumbers', 'scalanull', 'scalaunit', 'scalanothing']],
        ['nodeSection2', ['scalatypealias', 'scalaaliastypes', 'scalaintersectiontypes', 'scalauniontypes']],
        ['nodeSection3', ['scalatypeof', 'scalainstanceof', 'scaltypechecking', 'scalacast', 'scalacasting', 'scalatypecast', 'scalatypecasting', 'scalaisinstanceof', 'scalaasinstanceof']],
        ['nodeSection4', ['scalavariables', 'scalaval', 'scalavals', 'scalavar', 'scalavars', 'scalavalues', 'scalalazy', 'scalalazyval', 'scalalazyvals', 'scalalazyvalues', 'scalalazyinitialisation', 'scalalazyinitialization']],
        ['nodeSection5', ['scaldecompose', 'scaladecomposition', 'scaladestructure', 'scaladestructuring', 'scaladecomposetuples', 'scaladestructuretuples', 'scaladecomposeobjects', 'scaladestructureobjects', 'scaladecomposeclasses', 'scaladestructureclasses']],
        ['nodeSection6', ['scalaliterals', 'scalastrings', 'scalamultilinestrings', 'scalainterpolation', 'scalastringinterpolation', 'scalasprintf', 'scalaprintf', 'scalaformatstring', 'scalaformatting', 'scalaformatvalues', 'scalaformatvariables']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Incomplete'],
    'data/node-0602.htm',
    []
);
addNode(
    ['Programming languages', 'Scala', 'Incomplete', 'Enums (Scala 3)'],
    'data/node-0603.htm',
    [
        ['nodeSection1', ['tags']],
        ['nodeSection2', ['tags']],
        ['nodeSection3', ['tags']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Incomplete', 'Given'],
    'data/node-0604.htm',
    [
        ['nodeSection1', ['tags']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Incomplete', 'Implicit / Givens'],
    'data/node-0605.htm',
    [
        ['nodeSection1', ['tags']],
        ['nodeSection2', ['tags']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Incomplete', 'Implicit type conversion'],
    'data/node-0606.htm',
    [
        ['nodeSection1', ['tags']]
    ]
);
addNode(
    ['Programming languages', 'Scala', 'Incomplete', 'Scala training'],
    'data/node-0607.htm',
    [
        ['nodeSection1', ['']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript'],
    'data/node-0608.htm',
    []
);
addNode(
    ['Programming languages', 'TypeScript', 'Arrays'],
    'data/node-0609.htm',
    [
        ['nodeSection1', ['tsarrays', 'tsreadonlyarrays']],
        ['nodeSection2', ['tstuples']],
        ['nodeSection3', ['tsforin', 'tsforof', 'tslooparrays', 'tsiteratearrays', 'tsarrayiterators', 'tsarrayloops']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Assertions'],
    'data/node-0610.htm',
    [
        ['nodeSection1', ['tsassert', 'tsassertions']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Asynchronicity'],
    'data/node-0611.htm',
    [
        ['nodeSection1', ['tsasynchronous', 'tsasync', 'tsawait']],
        ['nodeSection2', ['tspromises', 'tspromiseall', 'tspromisesall', 'tspromiseallsettled', 'tspromisesallsettled', 'tspromiserace', 'tspromisesrace', 'tspromiselike', 'tsawaited']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Classes'],
    'data/node-0612.htm',
    [
        ['nodeSection1', ['tsclasses', 'tsproperties']],
        ['nodeSection2', ['tsmodifiers', 'tsqualifiers', 'tspublic', 'tsprotected', 'tsprivate', 'tsreadonly', 'tsabstractclasses']],
        ['nodeSection3', ['tsstatic', 'tsstaticblocks', 'tsstaticinitializers', 'tsstaticinitialisers']],
        ['nodeSection4', ['tsaccessors', 'tsgetters', 'tssetters', 'tsautomaticproperties', 'tsvirtualproperties']],
        ['nodeSection5', ['tsinheritance', 'tsextends', 'tsinhertitclasses']],
        ['nodeSection6', ['tsconstructors', 'tssuper', 'tsbase']],
        ['nodeSection7', ['']],
        ['nodeSection8', ['tsfluentapi', 'tsdynamicreturnvalues']],
        ['nodeSection9', ['tstypechecking', 'tsclasscompatibility', 'tscompatibility', 'tsstrenghtentypechecking', 'tssimilaritytypechecking']],
        ['nodeSection10', ['tsnestedclasses', 'tsstaticclasses', 'tsnestclasses']],
        ['nodeSection11', ['tsanonymousclasses']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Comments'],
    'data/node-0613.htm',
    [
        ['nodeSection1', ['tscomments', 'tsignoreerrors', 'tsexpecterrors']],
        ['nodeSection2', ['tsdepdendencies', 'tstripleslashdirectives', 'tsdirectives', 'tscompilationorder', 'tsfileoder']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Data types'],
    'data/node-0614.htm',
    [
        ['nodeSection1', ['tsdatatypes', 'tstypes', 'tsboolean', 'tsnumber', 'tsstring', 'tsany', 'tsundefined', 'tsbigint']],
        ['nodeSection2', ['tsreturnvalues', 'tsreturntypes', 'tsvoid', 'tsnever', 'tsthis']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['tscompositetypes', 'ts&amp;', 'ts|', 'tsunions', 'tsunitiontypes', 'tsintersections', 'tsintersectiontypes']],
        ['nodeSection5', ['tsconditionaltypes']],
        ['nodeSection6', ['']],
        ['nodeSection7', ['tstypedefs', 'tstypealiases', 'tsaliastype', '']],
        ['nodeSection8', ['tssymbols']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Declaration files'],
    'data/node-0615.htm',
    [
        ['nodeSection1', ['tsdeclarations', 'tsdeclarationfiles', 'tsambientfiles', 'tsambientdeclarations']],
        ['nodeSection2', ['tsdeclarevariables', 'tsambientvariables']],
        ['nodeSection3', ['tsdeclarehelpers', 'tsambienthelpers', 'tsdeclarehelperobjects', 'tsambienthelperobjects']],
        ['nodeSection4', ['tsdeclaremodules', 'tsambientmodules']],
        ['nodeSection5', ['tsdeclarenamespaces', 'tsambientnamespaces']],
        ['nodeSection6', ['tsdeclarefunctions', 'tsambientfunctions']],
        ['nodeSection7', ['tsdeclareclasses', 'tsambientclasses']],
        ['nodeSection8', ['tsdeclarehybridobjects', 'tsambienthybridobjects', 'tsdelcaremixedobjects', 'tsambientmixedobjects']],
        ['nodeSection9', ['tsdeclareenums', 'tsambientenums']],
        ['nodeSection10', ['tsexentsionmethods', 'tsextendclasses', 'tsaugment', 'tsaugmentclasses']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Decorators'],
    'data/node-0616.htm',
    [
        ['nodeSection1', ['tsdecorators', 'tsdefinedecorators', 'tsadddecorators', 'tsmethoddecorators', 'tsdecoratemethods']],
        ['nodeSection2', ['tsdynamicdecorators']],
        ['nodeSection3', ['tsmetdata', 'tsdecoratormetadata', 'tssetmetadata']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Destructuring'],
    'data/node-0617.htm',
    [
        ['nodeSection1', ['tsdecompose', 'tsdecomposition', 'tsdecomposeobjects', 'tsdestructure', 'tsdestructuring', 'tsdestructureobjects', 'tsextractobjectproperties', 'tsextractproperties']],
        ['nodeSection2', ['tsdestructurearrays', 'tsarraydestructuring', 'tsdecomposition', 'tsdecomposearrays', 'tsdestructuretuples', 'tstupledestructuring', 'tsdecomposetuples', 'tstupledecomposition']],
        ['nodeSection3', ['tsspreading', 'tsspreadoperator', 'tsspreadobjects', 'tsspreadarrays', 'tsspreadtuples']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Enums'],
    'data/node-0618.htm',
    [
        ['nodeSection1', ['tsenums', 'tsenumerations']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Errors'],
    'data/node-0619.htm',
    [
        ['nodeSection1', ['tsfinally', 'tsusing', 'tstrywithresources', 'tsdispose', 'tsdisposable']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['tsdisposablestack']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Functions'],
    'data/node-0620.htm',
    [
        ['nodeSection1', ['tsfunctions']],
        ['nodeSection2', ['tsdefaultparameters', 'tsdefaultfunctionparameters', 'tsdefaultvalues', 'tsoptionalparameters', 'tsoptionalvalues', 'tsoptionalfunctionparameters']],
        ['nodeSection3', ['tsvariableargumentlist', 'tsvariableargumentslist', 'tsargv', 'tsargc']],
        ['nodeSection4', ['tsparameterdestructuring', 'tsdestructureparameters', 'tsparameterdecomposition', 'tsdecomposeparameters', 'tsdestructurefunctionparameters', 'tsdecomposefunctionparameters']],
        ['nodeSection5', ['tscallbackfunctions', 'tscallbackparameters', 'tscallbackfunctionparameters']],
        ['nodeSection6', ['tsfunctionoverloading', 'tsoverloading', 'tsoverloadfunctions']],
        ['nodeSection7', ['tscontextpreservation', 'tsthisparameter']],
        ['nodeSection8', ['tslambdaexpressions', 'tsinlinefunctions', 'tsinlinefunctiondefinitions']],
        ['nodeSection9', ['tshybridobjects', 'tshybridobjects']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Generics'],
    'data/node-0621.htm',
    [
        ['nodeSection1', ['tsgenerics', 'tsgenericconstraints', 'tsgenerictypeconstraints']],
        ['nodeSection2', ['tsgenericfunctions']],
        ['nodeSection3', ['tsgenericclasses', 'tsgenericinterfaces']],
        ['nodeSection4', ['tsgenericconstructors', 'tsinstanciategenerics', 'tsinstantiategenerics', 'tsnewgenerics', 'tsgenericinstanciation', 'tsgenericsinstantiation']],
        ['nodeSection5', ['tsgenericfunctioninterfaces']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Interfaces'],
    'data/node-0622.htm',
    [
        ['nodeSection1', ['tsinterfaces']],
        ['nodeSection2', ['tsinterfaceliterals']],
        ['nodeSection3', ['tsfunctioninterfaces']],
        ['nodeSection4', ['tsindexableinterfaces', 'tsindexerinterfaces', 'tsindexinginterfaces', 'tsindexsignature', 'tsindexer']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Iterators'],
    'data/node-0623.htm',
    [
        ['nodeSection1', ['tsiterable', 'tsiterators']],
        ['nodeSection2', ['tsasynciterators']],
        ['nodeSection3', ['tsgenerators', 'tsenumerators']],
        ['nodeSection4', ['tsasyncgenerators']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Mixins'],
    'data/node-0624.htm',
    [
        ['nodeSection1', ['tsmixins', 'tsmergeclasses', 'tscombineclasses', 'tsmixclasses', 'tsjoinclasses', 'tsmulticlassinheritance']],
        ['nodeSection2', ['e']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Modules'],
    'data/node-0625.htm',
    [
        ['nodeSection1', ['tsmodules', 'tsdefinemodules', 'tsexports', 'tsexportmodules']],
        ['nodeSection2', ['tsimports', 'tsimporting', 'tsimportmodules', 'tsusemodules', 'tsdynamicimports', 'tsimportdynamically']],
        ['nodeSection3', ['tsimportjsonfiles', 'tsinlinejsonfiles']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['tsamd', 'tsrequirejs']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Namespaces'],
    'data/node-0626.htm',
    [
        ['nodeSection1', ['tsnamespaces', 'tsdefinenamespaces']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Type guards'],
    'data/node-0627.htm',
    [
        ['nodeSection1', ['tstypeguards', 'tstypecheckers', 'tstypeof', 'tsinstanceof']],
        ['nodeSection2', ['tssatisfies']],
        ['nodeSection3', ['tssatisfies']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['tsswitch', 'tsswitchcase', 'tsexhaustivetypechecks', 'tsexhaustivetypechecking', 'tsexhaustiveness', 'tsexhaustive']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Utility types'],
    'data/node-0628.htm',
    [
        ['nodeSection1', ['tsutilitypes', 'tstypemapping', 'tsmappedtypes', 'tsmaptypes', 'tspartial', 'tsrequired', 'tsreadonly', 'tsrecord', 'tspick', 'tsomit', 'tsexclude', 'tsnonullable', 'tsparameters', 'tsconstructorparameters', 'tsreturntype', 'tsinstancetype', 'tsthisparametertype', 'tsomitthisparameter', 'tsthistype', 'tsawaited']],
        ['nodeSection2', ['tsuppercase', 'tslowercase', 'tscapitalize', 'tscapitalise', 'tsuncapitalize', 'tsuncapitalise']],
        ['nodeSection3', ['tskeyof', 'tstypeof', 'tspropertytype', 'tsextracttypes']],
        ['nodeSection4', ['tsinfer', 'tsinfertypes', 'tsinference', 'tsinferrence', 'tsinferance', 'tsinferrance']],
        ['nodeSection5', ['tsconditioonaltypes']],
        ['nodeSection6', ['tsremovereadonly', 'tsremoveoptional', 'tsmakemandatory', 'tsmakerequired']]
    ]
);
addNode(
    ['Programming languages', 'TypeScript', 'Variables'],
    'data/node-0629.htm',
    [
        ['nodeSection1', ['tsvariables', 'tsdefinevariables', 'tslet', 'tsconst', 'tsconstants', 'tsconstantvariables']],
        ['nodeSection2', ['tscasting', 'tscasts', 'tstypecasting', 'tstypecasts']],
        ['nodeSection3', ['tsstrictnullchecks', 'tsnullchecks', 'tsforbidnulls', 'tsnullable', 'tsnonnullable', 'tsnotnullable']]
    ]
);
addNode(
    ['Programming languages', 'VB'],
    'data/node-0630.htm',
    []
);
addNode(
    ['Programming languages', 'VB', 'Advanced'],
    'data/node-0631.htm',
    []
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'ADO Connected Layer'],
    'data/node-0632.htm',
    [
        ['nodeSection1', ['vbadoconnectedlayer', 'vbconnnectedlayer', 'vbdatabases', 'vbrelationaldatabases']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbconnectdatabases', 'vbconnectdbs', 'vbdbconnections', 'vbdatabaseconnections', 'vbconnecttodatabases', 'vbconnecttodbs', 'vbconnectionstring']],
        ['nodeSection4', ['vbsqlstatements', 'vbdbcommands', 'vbdatabasecommands', 'vbsqlselect', 'vbsqlupdate', 'vbsqldelete', 'vbsqlinsert', 'vbinsert', 'vbupdate', 'vbdelete', 'vbselect&nbsp;', 'vbdatareader']],
        ['nodeSection5', ['vbdbtransactions', 'vbcommit', 'vbsqlcommit', 'vbrollback', 'vbsqlrollback', 'vbdatabasetransactions']],
        ['nodeSection6', ['vbstoredproedures', 'vbcallstoredprocedures', 'vbdatabaseprocedures', 'vbdbprocedures', 'vbcalldatabasestoredprocedures', 'vbcalldbstoredprocedures']],
        ['nodeSection7', ['vbdatabasecaching', 'vbcachedatabases', 'vbcachetables', 'vbcachedatabasetables', 'vbcachedbtables', 'vbdataset', 'vbdatabaseoffline', 'vbofflinedatabases']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'ADO Disconnected Layer'],
    'data/node-0633.htm',
    [
        ['nodeSection1', ['vbdisconnectedlayer', 'vbadodisconnectedlayer', 'vbinmemorydatabases', 'vbofflinedatabases', 'vbofflinedbs', 'vbmemorydatabases', 'vbmemorydbs']],
        ['nodeSection2', ['vbdatatable', 'vbdataview', 'vbdataset', 'vbdatarelation', 'vbdatacolumn', 'vbadodatatable', 'vbadodataview', 'vbadodataset', 'vbadodatarelation', 'vbadodatacolumn']],
        ['nodeSection3', ['vbdatarow', 'vbadodatarow', 'vbofflineselect', 'vbdtatablereader', 'vbqueryinmemorydatabases', 'vbqueryofflinedatabases']],
        ['nodeSection4', ['vbexportdatabases', 'vbexportdbs', 'vbdatabaseexport', 'vbdbexport', 'vbimportdatabases', 'vbimportdbs', 'vbdbimports', 'vbdatabaseimports']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'ADO Entity Framework'],
    'data/node-0634.htm',
    [
        ['nodeSection1', ['vbentityframework', 'vbef']],
        ['nodeSection2', ['vbconfigureef', 'vbconfigureentityframework', 'vbefconfiguration', 'vbentityframeworkconfiguration']],
        ['nodeSection3', ['vbefcodefirst', 'vbcodefirst', 'vbefdatabasefirst', 'vbdatabasefirst', 'vbefmodelfirst', 'vbmodelfirst', 'vbefmodellingapproaches', 'vbefapproaches', 'vbefmethodologies']],
        ['nodeSection4', ['vbefdatamodel', 'vbefprimarykeys', 'vbefforeignkeys', 'vbdbcontext', 'vbefdbcontext']],
        ['nodeSection5', ['vbefannotations', 'vbeftags', 'vbefmodelannotations', 'vbefmodeltags', 'vbeftagmodel', 'vbefconfiguremodels', 'vbefmodelconfiguration']],
        ['nodeSection6', ['vbeffluentapi']],
        ['nodeSection7', ['vbefsetupdatabases', 'vbefdatabasesetup', 'vbefsetupdbs', 'cvefdbsetup', 'vbefpopulatedatabases', 'vbefpopulatedbs', 'vbefinitializedatabases', 'vbefinitialisedatabases', 'vbefinitializedbs', 'vbefinitialisedbs']],
        ['nodeSection8', ['vbefusage']],
        ['nodeSection9', ['vbefqueries', 'vbefquerydatabase', 'vbefselectstatements', 'vbefselectrecords']],
        ['nodeSection10', ['vbefinsertstatements', 'vbefinsertrecords']],
        ['nodeSection11', ['vbefupdatestatements', 'vbefupdaterecords']],
        ['nodeSection12', ['vbefdeletestatements', 'vbefdeleterecords']],
        ['nodeSection13', ['vbefvalidationerrors', 'vbefvalidatemodel', 'vbefvalidatedata', 'vbefvalidatedatamodel']],
        ['nodeSection14', ['vbefconcurrencyupdate', 'concurrentupdates']],
        ['nodeSection15', ['vbeflazyloading']],
        ['nodeSection16', ['csefmigrations', 'csefdatabasemigrations', 'csefdbmigrations', 'csefmigratedatabases', 'csefmigratedbs']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'Assemblies'],
    'data/node-0635.htm',
    [
        ['nodeSection1', ['vbassemblies', 'vbprivateassemblies', 'vblibs', 'vblibraries', 'vbprivatelibraries', 'vbprivatelibs', 'vbdlls']],
        ['nodeSection2', ['vbsharedassemblies', 'vbsharedlibraries', 'vbsharedlibs', 'vbgac', 'vbglobalassemblycache']],
        ['nodeSection3', ['vbassemblyversioning', 'vbassemmblyversions', 'vbversioning', 'vbassemblydependencies']],
        ['nodeSection4', ['vbdynamicassemblies', 'vbdynamicloader', 'vbloadassemblies', 'vbloaddynamicassemblies', 'vbloaddll', 'vbloaddynamicdll', 'vbloadlibrary', 'vbloadlibraries', 'vbloaddynamiclibrary']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'Attributes'],
    'data/node-0636.htm',
    [
        ['nodeSection1', ['vbattributes', 'vbannotations', 'vbdefineattributes', 'vbcustomattributes', 'vbtags', 'vbcustomtags', 'vbdefinetags', 'vbimplementtags', 'vbimplementattributes']],
        ['nodeSection2', ['vbapplyattributes', 'vbapplytags', 'vbapplyannotations']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'LINQ'],
    'data/node-0637.htm',
    [
        ['nodeSection1', ['vblinqsyntax', 'vblinqexamples', 'vblinqsamples']],
        ['nodeSection2', ['vblinqsqloperations', 'vblinqjoins', 'vblinqouterjoins', 'vblinqleftouterjoins', 'vblinqgroupby', 'vblinqcartesianproduct', 'vblinqinnerjoin']],
        ['nodeSection3', ['vblinqaggregations', 'vblinqtake', 'vblinqtop', 'vblinqskip', 'vblinqdistinct', 'vblinqunion', 'vblinqcount', 'vblinqmax', 'vblinqmin', 'vblinqsum', 'vblinqaverage']],
        ['nodeSection4', ['vblinqparallel', 'vblinqinparallel', 'vblinqtaskparallellibrary', 'vblinqtpl']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'Reflections'],
    'data/node-0638.htm',
    [
        ['nodeSection1', ['vbreflections']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbdynamicfunctioncalls', 'vbcalldynamicfunctions']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'Serialisation'],
    'data/node-0639.htm',
    [
        ['nodeSection1', ['vbserialization', 'vbserialisation', 'vbobjectserialisation', 'vbobjectserialization']],
        ['nodeSection2', ['vbserializable', 'vbserialisable', 'vbserializeable', 'vbserialiseable', 'vbxmlattribute', 'vbnonserialized', 'vbconfigureserializationn', 'vbconfigureserialisation']],
        ['nodeSection3', ['vbserializationformats', 'vbserialisationformats', 'vbbinaryformatter', 'vbsoapformatter', 'vbxmlformatter', 'vbxmlserializer']],
        ['nodeSection4', ['vbserializeobjects', 'vbserialiseobjects', 'vbdeserialiseobjects', 'vbdeserializeobjects']],
        ['nodeSection5', ['vbserializationevents', 'vbserialisationevents', 'vbonserializing', 'vbonserialising', 'vbondeserialisting', 'vbondeserializing']],
        ['nodeSection6', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'Thread mechanisms'],
    'data/node-0640.htm',
    [
        ['nodeSection1', ['vbthreads', 'vbthreadpools', 'vbtasks', 'vbmultithreading']],
        ['nodeSection2', ['vbstartthreads', 'vbthreadstarter', 'vbcreatethreads']],
        ['nodeSection3', ['vbthreadpools']],
        ['nodeSection4', ['vbtaskparallellibrary', 'vbtpl', 'vbtasks', 'vbaynctasks', 'vbasynchronoustasks']],
        ['nodeSection5', ['vbasyncawait', 'vbasyncwait', 'vbwait', 'vbawait']],
        ['nodeSection6', ['vbasynchronouseventhandlers', 'vbaynceventhandlers', 'vbasyncronouscallbacks', 'vbasynccallbacks', 'vbasyncronousdelegates', 'vbasyncdelegates']],
        ['nodeSection7', ['vbtimer', 'vbtimtout', 'vbontimer', 'vbontimeout', 'vbcronjobs', 'vbchronjobs']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'Thread synchronisation'],
    'data/node-0641.htm',
    [
        ['nodeSection1', ['vbthreadsynchronisation', 'vbsynchronisethreads', 'vbsynchronizethreads', 'vbthreadsafeassignments']],
        ['nodeSection2', ['vbthreadsafecollections']],
        ['nodeSection3', ['vbthreadlocking', 'vblockobjects', 'vblockthreads', 'vbmonitorenter', 'vbsynchronised', 'vbsynchronized']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['vbtplsynchronisation', 'synchronisetpl', 'vbsynchronizetpl', 'vbtplbarriers', 'vbtplsignalandwait', 'vbsignalandwait']],
        ['nodeSection6', ['vbcancellationtokens', 'vbtplcancellationtokens']],
        ['nodeSection7', ['vbthreadnotifications', 'vbnotifythreads', 'vbautoresetevents']],
        ['nodeSection8', ['vbthreadupdatereporting', 'vbthreadstatusreporting', 'vbthreadprogressreporting', 'vbthreadnotifications']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'WCF'],
    'data/node-0642.htm',
    [
        ['nodeSection1', ['vbwcf', 'vbwebservices', 'vbsoap', 'vbimplementservices', 'vbimplementwebservices', 'vbimplementsoap', 'vbsoa', 'vbservices', 'vbwcfservices']],
        ['nodeSection2', ['vbdatacontracts', 'vbservicecontracts', 'vbserviceinterfaces', 'vbwcfdatacontracts', 'vbwcfservicecontracts']],
        ['nodeSection3', ['vbwcfservicehost', 'vbservicehost', 'vbwcfserver', 'vbserver', 'vbwcfendpoints', 'vbendpoints']],
        ['nodeSection4', ['vbserviceclient', 'vbwebserviceclient', 'vbwcfclient', 'vbwcfwebserviceclient', 'vbwcfproxy', 'vbproxy', 'vbcallwebservices', 'vbwcfcallwebservices']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Advanced', 'XML'],
    'data/node-0643.htm',
    [
        ['nodeSection1', ['vbxmldatabinding', 'vbxmlreader', 'vbxmlserializer', 'vbxmlserialiser']],
        ['nodeSection2', ['vbparsexml', 'vbxmlparser', 'vbloadxmlfiles', 'vbreadxmlfiles', 'vbparsexmlfiles']],
        ['nodeSection3', ['vbxmlliterals', 'vbxmlconstants']],
        ['nodeSection4', ['vbxmldom', 'vbdomxml', 'vbxdocuments', 'vbxelements', 'vbxcomments', 'vbxattributes']],
        ['nodeSection5', ['vbxmldocuments', 'vbxmlelements', 'vbxmlattributes']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes'],
    'data/node-0644.htm',
    []
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Accessors'],
    'data/node-0645.htm',
    [
        ['nodeSection1', ['vbproperties', 'vbclassproperties', 'vbautomaticproperties', 'vbaccessors', 'vbgetters', 'vbsetters']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbdefaultproperties']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Anonymous types'],
    'data/node-0646.htm',
    [
        ['nodeSection1', ['vbanonymoustypes', 'vbanonymousclasses', 'vbprojections', 'vbanonymousobjects']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Casting'],
    'data/node-0647.htm',
    [
        ['nodeSection1', ['vbcasting', 'vbcases', 'vbtypecasting', 'vbtypeconversion', 'vbtypecasting', 'vbcastobject', 'vbcasttype']],
        ['nodeSection2', ['vbcastoperator', 'vbcustomcasting', 'vbcustomtypeconversion']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Constructors'],
    'data/node-0648.htm',
    [
        ['nodeSection1', ['vbconstructors', 'vbcallconstructors', 'vbcallotherconstructors', 'vbconstructorchaining', 'vbconstructorhierarchy']],
        ['nodeSection2', ['vbbaseclassconstructor', 'vbinitialisebaseclass', 'vbinitializebaseclass', 'vbinitbaseclass']],
        ['nodeSection3', ['vbnewobject', 'vbinstanciateobjects', 'vbinstanciateclasses', 'vbinstanciation', 'vbinstantiateobjects', 'vbinstantiateclasses', 'vbinstantiation']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Destructors'],
    'data/node-0649.htm',
    [
        ['nodeSection1', ['vbdestructors', 'vbusing', 'vbdisposeobjects', 'vbdisposing', 'vbdisposable', 'vbdisposeable', 'vbfinalizeobjects', 'vbfinaliseobjects', '']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Enums'],
    'data/node-0650.htm',
    [
        ['nodeSection1', ['vbenums', 'vbenumerations']],
        ['nodeSection2', ['vbenumerate', 'vbgetenumvalues', 'vbgetenumerationvalues', 'vbenumerationvalues', 'vbgetenums']],
        ['nodeSection3', ['vbparseenums', 'vbparseenumerations']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Inheritance and extensions'],
    'data/node-0651.htm',
    [
        ['nodeSection1', ['vbinheritance', 'vbinherits', 'vbextends', 'vbextendclasses', 'vbinheritclasses']],
        ['nodeSection2', ['vbvirtualmethods', 'vbvirtualfunctions', 'vbpolymorphism']],
        ['nodeSection3', ['vbextensionmethods', 'vbextensions', 'vbextendclasses']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Interfaces'],
    'data/node-0652.htm',
    [
        ['nodeSection1', ['vbinterfaces', 'vbcreateinterfaces', 'vbdefineinterfaces']],
        ['nodeSection2', ['vbimplementinterfaces']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Modules'],
    'data/node-0653.htm',
    [
        ['nodeSection1', ['vbmodules', 'vbstaticclasses']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Operator overloading'],
    'data/node-0654.htm',
    [
        ['nodeSection1', ['vboperatoroverloading', 'vboverloadoperators']],
        ['nodeSection2', ['vbindexingoperatoroverloading', 'vboverloadindexingoperators']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Qualifiers'],
    'data/node-0655.htm',
    [
        ['nodeSection1', ['vbmodifiers', 'vbqualifiers', 'vbpublic', 'vbprivate', 'vbprotected', 'vbinternal', 'vbfriend', 'vbprotectedinternal', 'vbprotectedfriend']],
        ['nodeSection2', ['vbconstants', 'vbconsts', 'vbconstvariables', 'vbconstantvariables', 'vbreadonlyvariables', 'vbconstproperties', 'vbconstantproperties', 'vbreadonlyproperties', 'vbwriteonlyvariables', 'vbwriteonlyproperties']],
        ['nodeSection3', ['vboverridefunctions', 'vboverridable', 'vboverrides', 'vbnotoverridable', 'vbshadows', 'vboverloads']],
        ['nodeSection4', ['vbstatic', 'vbabstractclasses', 'vbsealedclasses', 'vbpartialclasses', 'vbmustinherit', 'vbmustoverride', 'vbnotinheritable']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Standard methods'],
    'data/node-0656.htm',
    [
        ['nodeSection1', ['vbequals', 'vbgethashcode', 'vbstandardmethods', 'vbstandardfunctions']],
        ['nodeSection2', ['vbcomparable', 'vbcomparators', 'vbcompareto']],
        ['nodeSection3', ['vbcloneobjects', 'vbcloneobjects', 'vbcloning']],
        ['nodeSection4', ['vbenumerators', 'vbenumeratecollections', 'vbenumerateclasses', 'vbenumerating']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Structures'],
    'data/node-0657.htm',
    [
        ['nodeSection1', ['vbstructs', 'vbstructures', 'vbvaluetypes', 'vbvalueclasses']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Classes', 'Syntax'],
    'data/node-0658.htm',
    [
        ['nodeSection1', ['vbclasses']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core'],
    'data/node-0659.htm',
    []
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Assorted'],
    'data/node-0660.htm',
    [
        ['nodeSection1', ['vbobsolete', 'vbmarkobsolete', 'vbmarkasobsolete', 'vbobsoletefunctions', 'vbobsoletemethods', 'vbobsoleteclasses', 'vbcslcompliant', 'vbclscompliance']],
        ['nodeSection2', ['vbnamespaces', 'vbusing', 'vbimportnamespaces', 'vbusenamespaces']],
        ['nodeSection3', ['vbonapplicationend', 'vbonapplicationclose', 'vbonapplicaationexit', 'vbonend', 'vbonexit', 'vbonclose']],
        ['nodeSection4', ['vbregion', 'vbcollapsibleregions']],
        ['nodeSection5', ['vbcompilerwarnings', 'vblinting', 'vbcompilerwarnings']],
        ['nodeSection6', ['vbconfigurationparameters', 'vbappsettings', 'vbapplicationsettings', 'vbconfigureapplicationparameters', 'vbconfigureparameters', 'vbconfiguration']],
        ['nodeSection7', ['vblazyobjectinitialisation', 'vblazyobjectinitialization', 'vblazyinitialisation', 'vblazyintitialization']],
        ['nodeSection8', ['vbgetvariablenames', 'vbgetclassnames', 'vbgetfunctionnames', 'vbgetmethodnames']],
        ['nodeSection9', ['vbnamingconventions']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Collections'],
    'data/node-0661.htm',
    [
        ['nodeSection1', ['vbarrays', 'vbinitialisearrays', 'vbinitializearrays']],
        ['nodeSection2', ['vbcollections', 'vbcollationclasses', 'vbcontainers', 'vbcontainerclasses', 'vblists', 'vbbitarrays', 'vbhashtables', 'vbqueues', 'vbstacks', 'vbsets', 'vblinkedlists', 'vbdictionaries']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Comments'],
    'data/node-0662.htm',
    [
        ['nodeSection1', ['vbcomments', 'vbdocumentation', 'vbjavadocs']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbdocumentationtags', 'vbjavadoctags', 'vbjavadoccommands', 'vbdocumentationcommands']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Control flow'],
    'data/node-0663.htm',
    [
        ['nodeSection1', ['vbcontrolstructures', 'vbloops', 'vblooping', 'vbiterate', 'vbiterating', 'vbiteration', 'vbfor', 'vbwhile', 'vbdowhile', 'vbdountil', 'vbdowhile']],
        ['nodeSection2', ['vbsiteratecollections', 'vbiteratecontainers', 'vbloopcollections', 'vbloopcontainers']],
        ['nodeSection3', ['vbconditionalprocessing', 'vbifelse', 'vbelseif']],
        ['nodeSection4', ['vbsswitchcase', 'vbcase']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Data types'],
    'data/node-0664.htm',
    [
        ['nodeSection1', ['vbdatatypes', 'vbbyte', 'vbshort', 'vbint', 'vblong', 'vbfloat', 'vbdouble', 'vbdecimal', 'vbboolean', 'vbcharacters', 'vbvar']],
        ['nodeSection2', ['vbdates', 'vbdatetimes', 'vbtimes', 'vbparsedate', 'vbformatdate']],
        ['nodeSection3', ['vbmaxint', 'vbminint']],
        ['nodeSection4', ['vboverflows', 'vbchecked', 'vbunchecked']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Debugging'],
    'data/node-0665.htm',
    [
        ['nodeSection1', ['vbifdebug', 'vbonedebugonly', 'vbdebugging', 'vbdebugger', 'vbdebugonly']],
        ['nodeSection2', ['vbassertions', 'vbasserting', 'vbdebugmessages', 'vbtracemassages', 'vblogmessages', 'vblogtracemessages', 'vblogdebugmessages']],
        ['nodeSection3', ['vbtracelisteners', 'vblogfiles']],
        ['nodeSection4', ['vbtraceswitches']],
        ['nodeSection5', ['vbdebuggerannotations', 'vbdebuggerattributes', 'vbdebuggertags']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Delegates'],
    'data/node-0666.htm',
    [
        ['nodeSection1', ['vbdelegates', 'vbcallbacks', 'vbcallbackfunctions', 'vbcallbackmethods']],
        ['nodeSection2', ['vbactiontemplate', 'vbactiondelegate', 'vbfunctemplate', 'vbfuncdelegate']],
        ['nodeSection3', ['vbeventhandlers', 'vbonevent', 'vbaddeventlistener', 'vbeventlistener', 'vbemitevents', 'vbsendevents', 'vbtriggerevents']],
        ['nodeSection4', ['vblambdaexpressions', 'vbinlinefunctions']],
        ['nodeSection5', ['vbeventargs', 'vbcustomeventargs']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Exceptions'],
    'data/node-0667.htm',
    [
        ['nodeSection1', ['vbexceptionhandling', 'vberrorhandling', 'vbexceptions', 'vbtrycatchfinally', 'vbcatchfinally', 'vbcatchexceptions', 'vbfinally', 'vbthrowexceptions', 'vbraiseexceptions']],
        ['nodeSection2', ['vbcustomexceptions', 'vbdefineexceptions', 'vbimplementexceptions', 'vbinheritexceptions']],
        ['nodeSection3', ['vbexceptionhierarchy', 'vbexceptionclasshierarchy', 'vbexceptionclasses']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Files and streams'],
    'data/node-0668.htm',
    [
        ['nodeSection1', ['vbfilesystem', 'vbbrowsefilesystem', 'vbbrowsefiles', 'vbfiles', 'vbdirectories', 'vbpaths', 'vbfileinfo', 'vbdirectoryinfo', 'vbdrives', 'vbdriveinfo']],
        ['nodeSection2', ['vbreadfiles', 'vbwritefiles', 'vbfileoperations', 'vbio', 'vbsavefiles', 'vbcreatefiles']],
        ['nodeSection3', ['vbstreamclasses', 'vbstreams', 'vbfilestreams', 'vbzipstreams', 'vbgzipstreams', 'vbstreamwriter', 'vbstreamreader', 'vbreadstreams', 'vbwritestreams', 'vbbufferedstreams', 'vbmemorystreams']],
        ['nodeSection4', ['vbclosestreams', 'vbdisposestreams']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Generics'],
    'data/node-0669.htm',
    [
        ['nodeSection1', ['vbgenerics', 'vbgenericclasses', 'vbtemplates', 'vbtemplateclasses', '']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Operators'],
    'data/node-0670.htm',
    [
        ['nodeSection1', ['vboperators', 'vbisnot', 'vbmod', 'vband', 'vbor', 'vblogicalexpressions', 'vbwith', 'vb?operator']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Parameters'],
    'data/node-0671.htm',
    [
        ['nodeSection1', ['vbparameters', 'vbfunctionparameters', 'vbmethodparameters', 'vbsubroutineparameters']],
        ['nodeSection2', ['vbsreferenceparameters', 'vbcallbyreference']],
        ['nodeSection3', ['vbvargs', 'vbvariableargumentlist', 'vbvariableargumentslist', 'vbvariablearguments', 'vbvariableparameters', 'vbvariableparameterlist', 'vbvariableparameterslist']],
        ['nodeSection4', ['vboptionalparameters', 'vbnamedparameters', 'vbdefaultparameters']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Strings'],
    'data/node-0672.htm',
    [
        ['nodeSection1', ['vbstrings', 'vbprint', 'vbconsolewriteline', 'vbwriteline', 'vbprintf', 'vbsprintf', 'vbformatstring']],
        ['nodeSection2', ['vbstringbuilders']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['vbparsestrings', 'vbparsenumbers', 'vbnumbertostrings', 'vbnumberstostrings', 'vbnumber2strings', 'vbnumbers2strings', 'vbtryparse', 'vbtonumber']],
        ['nodeSection5', ['vbregularexpressions', 'vbregexp']],
        ['nodeSection6', ['vbisletter', 'vbisdigit', 'vbisletterordigit', 'vbispunctuation', 'vbiswhitespace']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Syntax'],
    'data/node-0673.htm',
    [
        ['nodeSection1', ['vbexamples', 'vbsamples', 'vbsyntax']],
        ['nodeSection2', ['vbcompileroptions', 'vbexplicit', 'vbstrict', 'vbiferring', 'vbinfering', 'vbtypeinferrence']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'Core', 'Testing'],
    'data/node-0674.htm',
    [
        ['nodeSection1', ['vbtests', 'vbtesting', 'vbunittests', 'vbunittesting']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbtestclasses', 'vbtestmethods', 'vbinitialisetests', 'vbinitialiseunittests', 'vbinitializetests', 'vbinitializeunittests', 'vbtestcleanup', 'vbunittestcleanup', 'vbcleanuptests', 'vbcleanupunittests']],
        ['nodeSection4', ['vbmocking', 'vbmoq', 'vbsimulators', 'vbsimulateclasses']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF'],
    'data/node-0675.htm',
    []
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Animations'],
    'data/node-0676.htm',
    [
        ['nodeSection1', ['vbanimations', 'vbanimateproperty', 'vbanimateproperties', 'vbpropertyanimation']],
        ['nodeSection2', ['vbanimatetransformations', 'vbtransformationanimation']],
        ['nodeSection3', ['vbxamlanimations', 'vbanimatexaml']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Assorted'],
    'data/node-0677.htm',
    [
        ['nodeSection1', ['vbapplicationconfiguration', 'vbxamlconfiguration', 'vbxamlconfigurationproperties', 'vbxamlconfigproperties']],
        ['nodeSection2', ['vbdynamicxaml', 'vbloaddynamicxaml', 'vbloadxamldynamically']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Code only'],
    'data/node-0678.htm',
    [
        ['nodeSection1', ['vbwpf', 'vbcodeonlywpf', 'vbcodewpf']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Commands'],
    'data/node-0679.htm',
    [
        ['nodeSection1', ['vbcommands', 'vbdeclarecommands', 'vbdefinecommands', 'vbxamlcommands']],
        ['nodeSection2', ['vbcustomcommands', 'vbimplementcustomcommands', 'vbimplementcommands']],
        ['nodeSection3', ['vbapplicationcommands', 'vbcopy', 'vbpaste', 'vbcontextmenu', 'vbcut', 'vbhelp', 'vbeditingcommands', 'vbnavigationcommands', 'vbmediacommands']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Data binding (MVVM)'],
    'data/node-0680.htm',
    [
        ['nodeSection1', ['vbmvvm', 'vbmvc', 'vbviewmodel', 'vbmodel', 'vbmodelbinding', 'vbobjectbinding', 'vbdatabinding']],
        ['nodeSection2', ['vbxamldatabinding', 'vbxamlobjectbinding', 'vbxamlmodelbinding']],
        ['nodeSection3', ['vbobservablecollections']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Data binding (Properties)'],
    'data/node-0681.htm',
    [
        ['nodeSection1', ['vbpropertybinding', 'vbxamlpropertybinding']],
        ['nodeSection2', ['vbdependencyproperties', 'vbxamldependencyproperties', 'vbdefinedependencyproperties', 'vbregisterdependencyproperties']],
        ['nodeSection3', ['vbcollectionbinding', 'vbbindcollations', 'vbcontainerbinding', 'vbbindcontainers', 'vbxamlcollectionbinding', 'vbxamlbindcollections']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Dialogs'],
    'data/node-0682.htm',
    [
        ['nodeSection1', ['vbdialogs', 'vbxamldialogs', 'vbmessageboxes', 'vbxamlmessageboxes', 'vbstandarddialogs', 'vbdialogues', 'vbxamldialogues']],
        ['nodeSection2', ['vbopenfiledialogs', 'vbopenfiledialogues', 'vbxamlopenfiledialogs', 'vbxamlopenfiledialogues']],
        ['nodeSection3', ['vbsavefiledialogs', 'vbsavefiledialogues', 'vbxamlsavefiledialogs', 'vbxamlsavefiledialogues']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Events'],
    'data/node-0683.htm',
    [
        ['nodeSection1', ['vbxamlevents', 'vbxamleventhandling', 'vbxamleventbubbeling', 'vbxamleventbubbling', 'vbeventbubbling', 'vbeventbubbeling']],
        ['nodeSection2', ['vbxamleventhandlers', 'vbonkeypress', 'vbonkeydown', 'vbonkeyup', 'vbonmouseclick', 'vbondoubleclick', 'vbondblclick', 'vbonmousedown', 'vbonmouseover']],
        ['nodeSection3', ['vbamleventhandlers', 'vbxamlhandleevents']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Layout manager'],
    'data/node-0684.htm',
    [
        ['nodeSection1', ['vblayoutmanagers', 'vbxamllayoutmanagers', 'vbcanvas', 'vbwrappanel', 'vbgrid', 'vbdockpanel', 'vbviewbox', 'vbscrollviewer', 'vbscrollbar', 'cxamlcanvas', 'vbxamlwrappanel', 'vbxamlgrid', 'vbxamlstackpanel']],
        ['nodeSection2', ['vbxamltables', 'vbtables', 'vbtableviews', 'vbxamltableviews']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Localisation'],
    'data/node-0685.htm',
    [
        ['nodeSection1', ['vbi18n', 'vbinternationalisation', 'vbinternationalization', 'vblocalisation', 'vblocalization', 'vbtranslations', 'vbtranslatemessages', 'vbmultilingual']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbcultures', 'vbcultureinfo', 'vbuiculture', 'vbswitchculture', 'vbswitchuiculture', 'vbchangeculture', 'vbchangeuiculture']],
        ['nodeSection4', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Rendering'],
    'data/node-0686.htm',
    [
        ['nodeSection1', ['vbpainting', 'vbxamlpainting', 'vbpaintshapes', 'vbgeometries', 'vbdrawing', 'vbdrawshapes', 'vbdrawimages', 'vbpaintimages', 'vbrenderimages']],
        ['nodeSection2', ['vbxamlshapes', 'vbshapes', 'vbdrawshapes', 'vbpaintshapes', 'vbrendershapes']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['vbtransformshapes', 'vbtransformations', 'vbtransformingshapes', 'vbshapetranformations']],
        ['nodeSection5', ['vbgeometries', 'vbxamlgeometries', 'vbdrawgeometries', 'vbpaintgeometries']],
        ['nodeSection6', ['vbdrawcomplexshapes', 'vbcomplexshapes', 'vbpaintcomplexshapes']],
        ['nodeSection7', ['vbdrawkvectorgraphics', 'vbvectorgraphics', 'vbloadimages', 'vbloadimagefiles', 'vbshowimages', 'vbshowimagefiles']],
        ['nodeSection8', ['vbvisuallayer', 'vbdrawingcontext']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Resources'],
    'data/node-0687.htm',
    [
        ['nodeSection1', ['vbresources', 'vbassets', 'vbxamlresources', 'vbxamlassets', 'vbincludeimages', 'vbincludeimagesfiles', 'vblinkimages', 'vblinkimagefiles']],
        ['nodeSection2', ['vbembedresources', 'vbembedassets']],
        ['nodeSection3', ['vbxamlresources', 'vbxamltemplates']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['']]
    ]
);
addNode(
    ['Programming languages', 'VB', 'WPF', 'Styles'],
    'data/node-0688.htm',
    [
        ['nodeSection1', ['vblogicalresources', 'vbtemplatestyles', 'vbxamllogicalresources']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['vbinheritstyles', 'vbstyleinheritance']],
        ['nodeSection4', ['']],
        ['nodeSection5', ['vbcontextspecificstyles']],
        ['nodeSection6', ['vbanimationstyles']]
    ]
);
addNode(
    ['Programming languages', 'XML'],
    'data/node-0689.htm',
    []
);
addNode(
    ['Programming languages', 'XML', 'DTD'],
    'data/node-0690.htm',
    []
);
addNode(
    ['Programming languages', 'XML', 'DTD', 'Elemements and attributes'],
    'data/node-0691.htm',
    [
        ['nodeSection1', ['dtdexamples', 'dtdsamples', 'dtdsyntax', 'dtdelements', 'dtdhierarchies', 'dtdchildren', 'dtdchildelements', 'dtdpcdata', 'dtdany', 'dtdemptyelements']],
        ['nodeSection2', ['dtdattributes', 'dtdattlists']],
        ['nodeSection3', ['dtdmandatoryattributes', 'dtdrequiredattributes', 'dtdimpliedattribues', 'dtdoptionalattributes', 'dtdfixedvalueattributes', 'dtdfixedattributes', 'dtdefaultvalues', 'dtddefaultattributes']],
        ['nodeSection4', ['dtddatatypes', 'dtdattributetypes', 'dtdattributedatatypes', 'dtdcdata', 'dtdentity', 'dtdentities', 'dtdmtokens', 'dtdidrefs', 'dtduniontypes', 'dtdcombinedtypes', 'dtdnotations']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'DTD', 'Entities'],
    'data/node-0692.htm',
    [
        ['nodeSection1', ['dtdentities', 'dtdnamedentitites', 'dtddefineentities', 'dtddeclareentitites', 'dtdcustomentities']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'DTD', 'Include'],
    'data/node-0693.htm',
    [
        ['nodeSection1', ['dtdimports', 'dtdimportdtd', 'dtdincludes', 'dtdincludedtd', 'dtdembedexternaldtd', 'dtdembeddtd']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'DTD', 'Namepsaces'],
    'data/node-0694.htm',
    [
        ['nodeSection1', ['dtdnamespaces', 'dtdnamespaceprefixes']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['dtdimpliednamespaces', 'dtddefaultnamespaces', 'dtdimplynamespaces', 'dtdforcenamespaces', 'dtdenforcenamespaces']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XML'],
    'data/node-0695.htm',
    []
);
addNode(
    ['Programming languages', 'XML', 'XML', 'Assorted'],
    'data/node-0696.htm',
    [
        ['nodeSection1', ['xmlcdata']],
        ['nodeSection2', ['xmllanguages']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XML', 'Entities'],
    'data/node-0697.htm',
    [
        ['nodeSection1', ['xmlentities', 'xmlnamedenities', 'xmlquot;', 'xmlapos;', 'xmllt;', 'xmlgt;', 'xmlamp;', 'xmlmasking', 'xmlmaskcharacters', 'xmlencodecharacters', 'xmlmasksymbols', 'xmlsymbols', 'xmlencodesymbols']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XML', 'Namespaces'],
    'data/node-0698.htm',
    [
        ['nodeSection1', ['xmlnamespaces', 'xmlnamespaceelments', 'xmlnamespaceattributes']],
        ['nodeSection2', ['xmldefaultnamespaces']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XML', 'Prologue'],
    'data/node-0699.htm',
    [
        ['nodeSection1', ['xmlprogogues', 'xmlprologs', 'xmlheader', 'xmlencoding', 'xmlcharacterencoding', 'xmlfileencoding', 'xmlversion', 'xmlstandalone', 'xmlsamples', 'xmlexamples', 'xmlsyntax']],
        ['nodeSection2', ['xmlprocessinginstructions', 'xmlinstructions', 'xmlembeddedinstructions', 'xmlstylesheets', 'xmltransformations', 'xmladdstylesheets', 'xmladdxslt', 'xmladdtransformations', 'xmlxslt', 'xmladdxslt']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XML', 'Schemas'],
    'data/node-0700.htm',
    [
        ['nodeSection1', ['xmlxsds', 'xmlschemas', 'xmladdschemas', 'xmladdxsds', 'xmllinkschema', 'xmlimportschema', 'xmllinkxsds', 'xmlimportschemas', 'xmlincludeschmeas', 'xmlincludexsds']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['xmllinkdtds', 'xmlreferencedts', 'xmlinlcudedts', 'xmlimportdts', 'xmladdtds']],
        ['nodeSection4', ['xmlembeddtds', 'xmlinlinedtds', 'xmlembeddeddtds', 'xmlinlineddtds']],
        ['nodeSection5', ['xmloverridedtds']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XML', 'XLinks'],
    'data/node-0701.htm',
    [
        ['nodeSection1', ['xmlxlinks', 'xlinks']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XPath'],
    'data/node-0702.htm',
    []
);
addNode(
    ['Programming languages', 'XML', 'XPath', 'Functions'],
    'data/node-0703.htm',
    [
        ['nodeSection1', ['xpfunctions', 'xpbooleans', 'xptrue', 'xpfalse', 'xsnot', 'xpnegation', 'xpnegate', 'xsltfunctions']],
        ['nodeSection2', ['xpnumbers', 'xpmodulo', 'xpinfinity', 'xpnan', 'xpceiling', 'xpfloor', 'xprounding', 'xpsum']],
        ['nodeSection3', ['xpstrings', 'xpconcatenation', 'xpconcatenatestrings', 'xpstringlength', 'xpsearch', 'xpcontains', 'xpstartswith', 'xpsubstringbefore', 'xpsubstringafter', 'xpnormalisestrings', 'xpnormalizestrings', 'xptranslate', 'xpreplace']],
        ['nodeSection4', ['xpcount', 'xplast', 'xpposition', 'xpnodeposition', 'xpnodecount', 'xpelementposition', 'xspnodeposition', 'xpelementname', 'xpnodes', 'xpelements']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XPath', 'Selectors'],
    'data/node-0704.htm',
    [
        ['nodeSection1', ['xpaths', 'xpxpaths', 'xpselectors', 'xplocations', 'xplocationpaths', 'xpattributes', 'xpabsolutepaths', 'xsltxpaths']],
        ['nodeSection2', ['xprelativepaths', 'xpsteps', 'xsprelativesteps', 'xpattributes', 'xptext', 'xpcomments', 'xpprocessinginstructions', 'xpcontextnodes', 'xpcurrentcontextnodes', 'xpcurrentnodes']],
        ['nodeSection3', ['xpunions', 'xpchoice']],
        ['nodeSection4', ['xppredicates', 'xpconditions', 'xpconstraints']],
        ['nodeSection5', ['xpunabbreviatedpaths', 'xplongforms', 'xpancestors', 'xpdescendants', 'xpsiblings', 'xpself', 'xpnamespaces', 'xppreceding', 'xpfollowing', 'xpbrothers', 'xpsisters', 'xpbrothernodes', 'xpsisternodes']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XPath', 'XPointer'],
    'data/node-0705.htm',
    [
        ['nodeSection1', ['xpointers', 'xpxpointers']],
        ['nodeSection2', ['xphere', 'xporigins']],
        ['nodeSection3', ['xppoints', 'xpranges', 'xpstartpoints', 'xpendpoints', 'xprangeinside', 'xprangeto', 'xpstringranges']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD'],
    'data/node-0706.htm',
    []
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Assorted'],
    'data/node-0707.htm',
    [
        ['nodeSection1', ['xsdnullable', 'xsdnilable', 'xsdnillable']],
        ['nodeSection2', ['xsdaliasnames', 'xsdsubstitutiongroups', 'xsdaliases', 'xsdsynonyms']],
        ['nodeSection3', ['xsduniquevalues', 'xsdids', 'xsdkeys', 'xsdidfields', 'xsdkeyfields', 'xsduniquefields']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Attributes'],
    'data/node-0708.htm',
    [
        ['nodeSection1', ['xsdattributes', 'xsdattributegroups']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Complex types'],
    'data/node-0709.htm',
    [
        ['nodeSection1', ['xsdcomplextypes', 'xsdcomplexdatatypes', 'xsdchoices', 'xsdsequences', 'xsdall', 'xsdcontainers', 'xsdcollections', 'xsdcompoundtypes', 'xsdcompoundelements']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['xsdembeddedxml', 'xsdembedxml', 'xsdnestedxml', 'xsdnestxml', 'xsdembedding', 'xsdnesting']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Data types'],
    'data/node-0710.htm',
    [
        ['nodeSection1', ['xsddatatypes', 'xsdtypes', 'xsdbooleans', 'xsdbools']],
        ['nodeSection2', ['xsdnumbers', 'xsdintegers', 'xsdfloats', 'xsdbytes', 'xsdshorts', 'xsdints', 'xsdlongs', 'xsddecimals', 'xsddoubles', 'xsdnumericvalues']],
        ['nodeSection3', ['xsdstrings', 'xsdurls', 'xsduris', 'xslbase64binary', 'xsdrawdata', 'xsdrawstrings', 'xsdhexdata', 'xsdhexstrings', 'xsdrawhexdata', 'xsdrawhexstrings', 'xsdhexrawstrings', 'xsdhexrawdata']],
        ['nodeSection4', ['xsddates', 'xsdtimes', 'xsddatetimes', 'xsddateandtimes', 'xsddurations', 'xsdperiods']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Documentation'],
    'data/node-0711.htm',
    [
        ['nodeSection1', ['xsddocumentation', 'xsdappinfo', 'xsdannotations', 'xsdcomments', 'xsdinlinedocumentation', 'xsddescriptions']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Imports'],
    'data/node-0712.htm',
    [
        ['nodeSection1', ['xsdincludes', 'xsdincludefiles', 'xsdimports', 'xsdimportfiles', 'xsdincludeschemas', 'xsdimportschemas', 'xsdsubschemas']],
        ['nodeSection2', ['xsdredefine']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Inheritance'],
    'data/node-0713.htm',
    [
        ['nodeSection1', ['xsdinheritance', 'xsdextendtypes', 'xsdenhancetypes', 'xsdtypeinheritance']],
        ['nodeSection2', ['xsdabstracttypes', 'xsdabstractelements', 'xsdenforceinheritance', 'xsdforceinheritance']],
        ['nodeSection3', ['xsdlimitinheritance', 'xsdrestrictihneritance', 'xsdcontrolinheritance', 'xsdforbidinheritance']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Namespaces'],
    'data/node-0714.htm',
    [
        ['nodeSection1', ['xsdexamples', 'xsdsamples', 'xsdsyntax', 'xsd:namespaces']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSD', 'Simple types'],
    'data/node-0715.htm',
    [
        ['nodeSection1', ['xsdsimpletypes', 'xsdsimpleelements', 'xsdelements', 'xsdefineelements']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['xsdrestrictions', 'xsdrestricttypes', 'xsdconstraints', 'xsdlength', 'xsdmin', 'xsdmax', 'xsdpattern', 'xsdregexp', 'xsdregularexpressions', 'xsdenums', 'xsdenumerations', 'xsdunions', 'xsd']],
        ['nodeSection4', ['xsduniontypes', 'xsdcombinetypes', 'xcdcombinedtypes', 'xsdunions']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT'],
    'data/node-0716.htm',
    []
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Assorted'],
    'data/node-0717.htm',
    [
        ['nodeSection1', ['xsltnamespaces']],
        ['nodeSection2', ['xsltoutputconfiguration', 'xstlencoding', 'xsltoutputformats', 'xslthtml', 'xsltcreatehtml', 'xsltgeneratehtml', 'xslttext', 'xslttext', 'xsltcteatetext', 'xstlcreatetxt', 'xsltgeneratetext', 'xsltgeneratetxt']],
        ['nodeSection3', ['xsltfallbackrules', 'xsltfallbacktemplates', 'xsltcompatibility']],
        ['nodeSection4', ['xsltmessages', 'xsltprocessormessages', 'xsltsendmessages', '']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Built-in functions'],
    'data/node-0718.htm',
    [
        ['nodeSection1', ['xsltfunctions', 'xsltbuiltinfunctions']],
        ['nodeSection2', ['xsltfeaturedetection', 'xsltcheckfeatures', 'xsltcheckfunctions', 'xsltcheckelements', 'xsltgetproperties', 'xsltdetectfeatures']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['xsltdocuments', 'xsltgenerateids', 'xsltunparsedentityuris']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Control structures'],
    'data/node-0719.htm',
    [
        ['nodeSection1', ['xsltcontrolstructures', 'xsltloops', 'xsltiterations', 'xsltiterators', 'xsltforeach', 'xsltsort', 'xsltforeachcommands', 'xsltforeachstatements', 'xlsforstatements', 'xsltforcommands']],
        ['nodeSection2', ['xsltconditionalprocessing', 'xsltifelse', 'xsltifthenelse', 'xlsifcommands', 'xlsifstatements']],
        ['nodeSection3', ['xsltswitchcasestatement', 'xlsswitchcasecommand', 'xlstchoosecommands', 'xsltchoosestatements', 'xsltwhencommands', 'xsltwhenstatements']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Data'],
    'data/node-0720.htm',
    [
        ['nodeSection1', ['xsltretrievedata', 'xsltdata', 'xsltreaddata', 'xsltextractdata', 'xsltgetnodeconents', 'xsltgettextcontents', 'xsltgetcontents', 'xsltvalueof', 'xsltgetvalues']],
        ['nodeSection2', ['xsltkeys', 'xsltfilters', 'xsltprefilters', 'xsltcustomfilters', 'xsltfilterdata', 'xsltfilterinputdata']],
        ['nodeSection3', ['xsltnumbers', 'xsltformatnumbers', 'xsltnumberformats', 'xsltdecimalformats']],
        ['nodeSection4', ['xslttext', 'xsltmasking', 'xsltescaping', 'xsltmasktext', 'xslthtmlsymbols', 'xsltescapetext', 'xsltoutputtext', 'xsltprinttext', 'xslttrimming', 'xsltstripspaces', 'xsltpreservespaces']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Elements and attributes'],
    'data/node-0721.htm',
    [
        ['nodeSection1', ['xsltattributes', 'xsltgetattributes', 'xsltreadattributes', 'xsltgetattributevalues', 'xsltreadattributevalues', 'xsltcreateattributes', 'xsltgenerateattributes', 'xsltoutputattributes']],
        ['nodeSection2', ['xsltnodes', 'xsltelements', 'xsltcreatelements', 'xslttags', 'xsltcreatetags', 'xsltcopyof', 'xsltcopynodes', 'xsltcopysubtree', 'xsltcopytree', 'xsltcopyelements']],
        ['nodeSection3', ['xsltcomments', 'xsltcreatecomments', 'xsltgeneratecomments', 'xsltoutputcomments', 'xslt&lt;!--']],
        ['nodeSection4', ['xsltprocessinginstructions', 'xsltcreateprocessinginstructions', 'xsltgenerateprocessinginstructions', 'xsltoutputprocessinginstructions', 'xslt&lt;?']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Syntax'],
    'data/node-0722.htm',
    [
        ['nodeSection1', ['xsltexamples', 'xsltsamples', 'xsltsyntax', 'xsltprocessingorder']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Template rules'],
    'data/node-0723.htm',
    [
        ['nodeSection1', ['xslttemplates', 'xsltrules', 'xslttemplaterules']],
        ['nodeSection2', ['xsltcalltemplates', 'xsltcalltemplaterules', 'xsltcalltemplates', 'xsltapplytemplates', 'xsltappyltemplaterules', 'xsltapplyrules', 'xsltinvoketemplates', 'xsltinvoketemplaterules', 'xsltinvokerules']],
        ['nodeSection3', ['xsltimports', 'xsltimporting', 'xsltincludes', 'xsltincludefiles', 'xsltimportfiles']],
        ['nodeSection4', ['xsltmultipass', 'xsltmodes', 'xsltcustommodes', 'xsltexecutionmodes', 'xsltrunmodes', 'xslttemplatemodes', 'xsltrulemodes', 'xslttemplaterulemodes']]
    ]
);
addNode(
    ['Programming languages', 'XML', 'XSLT', 'Variables'],
    'data/node-0724.htm',
    [
        ['nodeSection1', ['xsltvariables', 'xsltdefinievariables', 'xsltgetvariables', 'xsltgetvariablevalues', 'xsltsetvariables']],
        ['nodeSection2', ['']]
    ]
);
addNode(
    ['Tools'],
    'data/node-0725.htm',
    []
);
addNode(
    ['Tools', 'Git'],
    'data/node-0726.htm',
    []
);
addNode(
    ['Tools', 'Git', 'Analysis'],
    'data/node-0727.htm',
    [
        ['nodeSection1', ['gitstatus', 'gitreflogs', 'gitanalyse', 'gitanalysis', 'githistories', 'githistorybrowsing', 'gitbrowsehistories', 'gitbrowsehistory', 'gitanalysehistory', 'gitanalyzehistory']],
        ['nodeSection2', ['githistory', 'githistories', 'gitlogs', 'gitshortlogs', 'gitdescribe', 'gitsearchistory', 'gitsearchistories']],
        ['nodeSection3', ['']],
        ['nodeSection4', ['gitdiffs', 'gitdifferences', 'gitfilediffs', 'gitfiledifferences', 'gitdifffiles', 'gitblame', 'gitgrep', 'gitsearch']],
        ['nodeSection5', ['gitbisection']]
    ]
);
addNode(
    ['Tools', 'Git', 'Assorted'],
    'data/node-0728.htm',
    [
        ['nodeSection1', ['githelp', 'gitgethelp', 'githelpcommands', 'gitmanpages']],
        ['nodeSection2', ['gitsnappshots', 'gitcreatesnapshot', 'gitarchives', 'gitcreatearchives', 'gitziparchives', 'gitzipping', 'gitzippedarchives', 'gitzipsnapshots', 'gitzippedsnapshots']],
        ['nodeSection3', ['gitreferenceommits', 'gitreferences', 'gitreferenceommitranges', 'gitspecifyrevisions', 'gitspecifycommits', 'gitrevisionranges', 'gitranges', 'gitcommitranges']],
        ['nodeSection4', ['gitsubmodules', 'gitembedrepositories', 'gitembeddedrepositories', 'gitembedsubmodules', 'gitembedmodules', 'gitembeddedsubmodules', 'gitembeddedmodules']]
    ]
);
addNode(
    ['Tools', 'Git', 'Branching'],
    'data/node-0729.htm',
    [
        ['nodeSection1', ['gitbranches', 'gitbranching', 'gitshowbranches', 'gitlistbranches']],
        ['nodeSection2', ['gitcreatebranches', 'gittrackingbranches', 'gitcreatetrackingbrances']],
        ['nodeSection3', ['gitswitching', 'gitcheckingout', 'gitcheckout', 'gitswitchbranches', 'gitcheckoutbranches']],
        ['nodeSection4', ['gitmerging', 'gitmergebranches', 'gitcherrypicking', 'gitcherypicking', 'gitwhitespaces', 'gitignorewhitespaces', 'gitblanks', 'gitignoreblanks', 'gitrerere']],
        ['nodeSection5', ['gitrevertmerges', 'gitrevertmerging', 'gitundomerges', 'gitundomerging', 'gitunmerge', 'gitunmerging', 'gitresetmerges']],
        ['nodeSection6', ['gitdeletebranches', 'gitremovebranches']],
        ['nodeSection7', ['gitrebasing', 'gitrebasebranches', 'gitrecreatebranches', 'gitmovebranches']],
        ['nodeSection8', ['gitmergeconflicts', 'githandlemergeconflicts', 'gitconflicts', 'githandleconflicts', 'gitresolvemergeconflicts', 'gitresolveconflicts', 'gitconflictresolution', 'gitabortmerge']]
    ]
);
addNode(
    ['Tools', 'Git', 'Commands'],
    'data/node-0730.htm',
    [
        ['nodeSection1', ['gitstagingarea', 'gitstagechanges', 'gitaddfiles', 'gitaddfolders', 'gitrm', 'gitremovefiles', 'gitremovefolders', 'gitdeletefiles', 'gitdeletefolders', 'gitrenamefiles', 'gitmv', 'gitmove']],
        ['nodeSection2', ['gitcommits', 'gitcorrectcommits', 'gitchangecommits', 'gitmodifycommits', 'gitaltercommits', 'gitamendcommits', 'gitammendcommits']],
        ['nodeSection3', ['gitreverworkingdirectory', 'gitrevertworkspace', 'gitrevertworkdirectory', 'gitreverting', 'gitreset', 'gitresetworkingdirectory', 'gitresetworkspaces']],
        ['nodeSection4', ['gitcleanworkingdirectory', 'gitcleanworkspace']]
    ]
);
addNode(
    ['Tools', 'Git', 'Configuration'],
    'data/node-0731.htm',
    [
        ['nodeSection1', ['gitconfigfiles', 'gitconfigfilelocations']],
        ['nodeSection2', ['gitshowconfigurationparameters', 'gitlistconfigurationparameters', 'gitsetconfiguraitonparameters', 'gitaddconfigurationparameters', 'gitdefineconfigurationparameters']],
        ['nodeSection3', ['gitconfigurationparameters', 'gitusername', 'gitemailaddress', 'giteditorsetting', 'gitdiff3mode', 'gitaliases', 'gitdefinealiases', 'gitcommandaliases', 'gitcreatealiases', 'gitsetusernames', 'gitsetemailaddresses']],
        ['nodeSection4', ['gitignore', 'gitfilefilefilters']]
    ]
);
addNode(
    ['Tools', 'Git', 'Patches'],
    'data/node-0732.htm',
    [
        ['nodeSection1', ['gitpatches', 'gitpatching', 'gitcreatepatches', 'gitcreatepatchsets', 'gitformatpatches', 'gitpatchfiles']],
        ['nodeSection2', ['gitapplypatches', 'gitimportpatches', 'gitloadpatches', 'gitreadpatches']],
        ['nodeSection3', ['gitemailpatches', 'gitemailconfiguration', 'gitconfigureemails', 'gitconfiguresmtp', 'gitsmtp', 'gitimap', 'gitconfigureimap', 'gitsendpatches', 'gitemailpatches', 'gitpullrequests']],
        ['nodeSection4', ['gitbundles', 'gitcreatebundles', 'gitclonebundles', 'gitimportbundles', 'gitloadbundles', 'gitverifybundles']]
    ]
);
addNode(
    ['Tools', 'Git', 'Signing'],
    'data/node-0733.htm',
    [
        ['nodeSection1', ['gitkeymanagement', 'gitsigning', 'gitgpg', 'gitimportkeys', 'gitaddkeys', 'gitcryptographic', 'gitcryptography', 'gitkeymanagement']],
        ['nodeSection2', ['gitsigntags', 'gitsignedtags', 'gittagsigning', 'gitsigncommits', 'gitsignedcommits', 'gitcommitsigning', 'gitverifysignatures', 'gitsignmerge', 'gitsignedmerge']]
    ]
);
addNode(
    ['Tools', 'Git', 'Stashing'],
    'data/node-0734.htm',
    [
        ['nodeSection1', ['gitstashes', 'gitstashing', 'gitstacks', 'gitworkstacks', 'gitworkarchive', 'gitcreatestashes', 'gitsavestashes']],
        ['nodeSection2', ['gitliststashes']],
        ['nodeSection3', ['gitrestorestashes', 'gitdeletestashes', 'gitremovestashes', 'gitpopstashes', 'gitapplystashes', 'gitdropstashes']]
    ]
);
addNode(
    ['Tools', 'Git', 'Synchronisation'],
    'data/node-0735.htm',
    [
        ['nodeSection1', ['gitinitialisations', 'gitinitializations', 'gitinitialiserepositories', 'gitinitializerepositories', 'gitbarerepositories', 'gitsynchronise', 'gitsynchronize', 'gitsynchronisation', 'gitsynchronization']],
        ['nodeSection2', ['gitclonding', 'gitclonerepositories', 'githttps', 'gitssh']],
        ['nodeSection3', ['gitremotes', 'gitmanageremotes', 'gitremoterepositories', 'gitmanageremoterepositories', 'gitaddrepositories', 'gitaddremoterepositories', 'gitremoveremoterepositories', 'gitdeleteremoterepositories']],
        ['nodeSection4', ['gituploads', 'gituploading', 'gitpushing', 'gitpushes', 'gitpushchanges', 'gituploadchanges']],
        ['nodeSection5', ['gitfetching', 'gitpulling', 'gitdownloading', 'gitfetchchanges', 'gitpullchanges', 'gitdownloadchanges', 'gitfetchupdates', 'gitpullupdates', 'gitdownloadupdates']]
    ]
);
addNode(
    ['Tools', 'Git', 'Tagging'],
    'data/node-0736.htm',
    [
        ['nodeSection1', ['gittags', 'gittagging', 'gitaddtags', 'gitcreatetags', 'gitshowtags', 'gitlisttags', 'gitsearchtags']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Tools', 'Git', 'Workflows'],
    'data/node-0737.htm',
    [
        ['nodeSection1', ['gitworkflows']],
        ['nodeSection2', ['gitconsolidatebranches', 'gitunitebranches', 'gitcombinebranches', 'gitunifybranches']],
        ['nodeSection3', ['']]
    ]
);
addNode(
    ['Tools', 'Gradle'],
    'data/node-0738.htm',
    []
);
addNode(
    ['Tools', 'Gradle', 'Command line'],
    'data/node-0739.htm',
    [
        ['nodeSection1', ['gradlecommandlineparameters', 'gradleoptions', 'gradleparameters', 'gradlecommandlineoptions']]
    ]
);
addNode(
    ['Tools', 'Gradle', 'Groovy'],
    'data/node-0740.htm',
    [
        ['nodeSection1', ['gradlegroovy']],
        ['nodeSection2', ['radlegroovyexamples']]
    ]
);
addNode(
    ['Tools', 'Gradle', 'Libraries'],
    'data/node-0741.htm',
    [
        ['nodeSection1', ['gradlelibraries', 'gradlepackages', 'gradlepackagemanager', 'gradlelibrarydependencies', 'gradleexternaldependencies']],
        ['nodeSection2', ['gradlesubprojects', 'gradlesubmodules', 'gradlemodules', 'gradleprojects']],
        ['nodeSection3', ['gradlesharedconfiguration', 'gradleshareconfiguration', 'gradlecommonconfiguration', 'gradlesharedconfiguration']]
    ]
);
addNode(
    ['Tools', 'Gradle', 'Plugins'],
    'data/node-0742.htm',
    [
        ['nodeSection1', ['gradleplugins', 'gradleaddplugins', 'gradleuseplugins', 'gradleexternalplugins', 'gradleapplyplugins']],
        ['nodeSection2', ['']],
        ['nodeSection3', ['gradlecustomplugins', 'gradlescriptlugins', 'gradlecreateplugins', 'gradlewriteplugins', 'gradleimplementplugins']]
    ]
);
addNode(
    ['Tools', 'Gradle', 'Tasks / targets'],
    'data/node-0743.htm',
    [
        ['nodeSection1', ['gradletasks', 'gradletargets', 'gradlerules']],
        ['nodeSection2', ['gradledofirst', 'gradledolast', 'gradlestopexecutionexceptions']],
        ['nodeSection3', ['gradleexecutionorder', 'gradleexecutionsequence']],
        ['nodeSection4', ['gradleconditionalprocessing', 'graldeifs', 'gradleifstatements', 'gradleconditionalexecution', 'gradleonlyif']],
        ['nodeSection5', ['gradledependencies', 'gradletargetdependencies', 'gradletaskdependencies']]
    ]
);

