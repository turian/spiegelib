Search.setIndex({docnames:["contributing","examples/examples_index","examples/fm_sound_match","examples/fm_sound_match_pages/fm_sound_match_dataset_generation","examples/fm_sound_match_pages/fm_sound_match_deep_learning","examples/fm_sound_match_pages/fm_sound_match_evaluation","examples/fm_sound_match_pages/fm_sound_match_genetic","examples/fm_sound_match_pages/fm_sound_match_synth_config","examples/fm_sound_match_pages/fm_sound_match_train_models","getting_started/getting_started","getting_started/installation","index","reference/core","reference/core/dataset_generator","reference/estimators","reference/estimators/estimator_base","reference/estimators/lstm","reference/estimators/tf_estimator_base","reference/features","reference/features/features_base","reference/features/mfcc","reference/synth","reference/synth/synth_base","reference/synth/synth_vst"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["contributing.rst","examples/examples_index.rst","examples/fm_sound_match.rst","examples/fm_sound_match_pages/fm_sound_match_dataset_generation.rst","examples/fm_sound_match_pages/fm_sound_match_deep_learning.rst","examples/fm_sound_match_pages/fm_sound_match_evaluation.rst","examples/fm_sound_match_pages/fm_sound_match_genetic.rst","examples/fm_sound_match_pages/fm_sound_match_synth_config.rst","examples/fm_sound_match_pages/fm_sound_match_train_models.rst","getting_started/getting_started.rst","getting_started/installation.rst","index.rst","reference/core.rst","reference/core/dataset_generator.rst","reference/estimators.rst","reference/estimators/estimator_base.rst","reference/estimators/lstm.rst","reference/estimators/tf_estimator_base.rst","reference/features.rst","reference/features/features_base.rst","reference/features/mfcc.rst","reference/synth.rst","reference/synth/synth_base.rst","reference/synth/synth_vst.rst"],objects:{"spiegel.core":{dataset_generator:[13,0,0,"-"]},"spiegel.core.dataset_generator":{DatasetGenerator:[13,1,1,""]},"spiegel.core.dataset_generator.DatasetGenerator":{create_audio_folder:[13,2,1,""],generate:[13,2,1,""],save_normalizers:[13,2,1,""]},"spiegel.estimator":{estimator_base:[15,0,0,"-"],lstm:[16,0,0,"-"],tf_estimator_base:[17,0,0,"-"]},"spiegel.estimator.estimator_base":{EstimatorBase:[15,1,1,""]},"spiegel.estimator.estimator_base.EstimatorBase":{predict:[15,2,1,""]},"spiegel.estimator.lstm":{LSTM:[16,1,1,""]},"spiegel.estimator.lstm.LSTM":{add_testing_data:[16,2,1,""],add_training_data:[16,2,1,""],build_model:[16,2,1,""],fit:[16,2,1,""],load:[16,2,1,""],load_model_from_checkpoint:[16,2,1,""],load_weights:[16,2,1,""],predict:[16,2,1,""],rms_error:[16,2,1,""],save_model:[16,2,1,""],save_weights:[16,2,1,""]},"spiegel.estimator.tf_estimator_base":{GenericTFModel:[17,1,1,""],TFEstimatorBase:[17,1,1,""]},"spiegel.estimator.tf_estimator_base.GenericTFModel":{add_testing_data:[17,2,1,""],add_training_data:[17,2,1,""],build_model:[17,2,1,""],fit:[17,2,1,""],load:[17,2,1,""],load_model_from_checkpoint:[17,2,1,""],load_weights:[17,2,1,""],predict:[17,2,1,""],rms_error:[17,2,1,""],save_model:[17,2,1,""],save_weights:[17,2,1,""]},"spiegel.estimator.tf_estimator_base.TFEstimatorBase":{add_testing_data:[17,2,1,""],add_training_data:[17,2,1,""],build_model:[17,2,1,""],fit:[17,2,1,""],load:[17,2,1,""],load_model_from_checkpoint:[17,2,1,""],load_weights:[17,2,1,""],predict:[17,2,1,""],rms_error:[17,2,1,""],save_model:[17,2,1,""],save_weights:[17,2,1,""]},"spiegel.features":{features_base:[19,0,0,"-"],mfcc:[20,0,0,"-"]},"spiegel.features.features_base":{FeaturesBase:[19,1,1,""],FullDataStandardScaler:[19,1,1,""],NormalizerError:[19,3,1,""]},"spiegel.features.features_base.FeaturesBase":{add_modifier:[19,2,1,""],fit_normalizers:[19,2,1,""],fit_normalizers_2d:[19,2,1,""],fit_normalizers_3d:[19,2,1,""],fit_normalizers_full_data:[19,2,1,""],get_features:[19,2,1,""],has_normalizers:[19,2,1,""],load_normalizers:[19,2,1,""],normalize:[19,2,1,""],save_normalizers:[19,2,1,""],set_normalizer:[19,2,1,""]},"spiegel.features.features_base.FullDataStandardScaler":{fit:[19,2,1,""],fit_transform:[19,2,1,""],transform:[19,2,1,""]},"spiegel.features.features_base.NormalizerError":{args:[19,4,1,""],with_traceback:[19,2,1,""]},"spiegel.features.mfcc":{MFCC:[20,1,1,""]},"spiegel.features.mfcc.MFCC":{add_modifier:[20,2,1,""],fit_normalizers:[20,2,1,""],fit_normalizers_2d:[20,2,1,""],fit_normalizers_3d:[20,2,1,""],fit_normalizers_full_data:[20,2,1,""],get_features:[20,2,1,""],has_normalizers:[20,2,1,""],load_normalizers:[20,2,1,""],normalize:[20,2,1,""],save_normalizers:[20,2,1,""],set_normalizer:[20,2,1,""]},"spiegel.synth":{synth_base:[22,0,0,"-"],synth_vst:[23,0,0,"-"]},"spiegel.synth.synth_base":{SynthBase:[22,1,1,""]},"spiegel.synth.synth_base.SynthBase":{get_audio:[22,2,1,""],get_parameters:[22,2,1,""],get_patch:[22,2,1,""],get_random_example:[22,2,1,""],load_patch:[22,2,1,""],load_state:[22,2,1,""],randomize_patch:[22,2,1,""],render_patch:[22,2,1,""],save_state:[22,2,1,""],set_overridden_parameters:[22,2,1,""],set_patch:[22,2,1,""]},"spiegel.synth.synth_vst":{SynthVST:[23,1,1,""],parse_parameters:[23,5,1,""]},"spiegel.synth.synth_vst.SynthVST":{get_audio:[23,2,1,""],get_parameters:[23,2,1,""],get_patch:[23,2,1,""],get_random_example:[23,2,1,""],is_valid_parameter_setting:[23,2,1,""],load_patch:[23,2,1,""],load_plugin:[23,2,1,""],load_state:[23,2,1,""],randomize_patch:[23,2,1,""],render_patch:[23,2,1,""],save_state:[23,2,1,""],set_overridden_parameters:[23,2,1,""],set_patch:[23,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:attribute","5":"py:function"},terms:{"140mb":3,"2nd":7,"8gb":3,"abstract":[15,17,19,22],"boolean":[19,20,22],"class":[3,4,5,6,17],"default":[0,3,10,13,16,17,19,20,22,23],"export":[0,10],"final":5,"float":[7,22,23],"function":[4,16,17,19,20],"import":[0,3,4,5,6,7,8,10],"int":[13,16,17,19,20,22,23],"new":[0,6,7,10,22,23],"return":[16,17,19,20,22,23],"short":[7,22,23],"static":[16,17],"switch":7,"true":[3,4,13,19,20,22,23],And:2,But:0,For:[0,3,10],Ins:[3,4,6,7],The:[0,2,3,5,6,7,8,10,11],There:7,These:[0,3,10],Use:10,Uses:23,Using:[0,10,16,17],Will:[13,22,23],_________________________________________________________________:8,__traceback__:19,abc:[15,19],abl:2,about:[3,11],absolut:5,academ:13,accept:[19,20,22],activ:[0,10],add:[0,8,10,19,20],add_modifi:[4,19,20],add_testing_data:[8,16,17],add_training_data:[8,16,17],added:[16,17],addition:3,after:11,alg:7,algorithm:[2,5,7],algorithm_numb:7,all:[2,3,4,5,6,7,8,10],alreadi:[0,2,10],also:[2,4,5,7,10],alwai:7,amplitud:7,anaconda3:[0,10],anaconda:[0,9],anconda:10,appli:[19,20],applic:[0,10],approach:6,arang:5,aren:3,arg:[16,17,19],argument:[3,16,17,20,23],arrai:[4,8,16,17,19,20,22,23],arrang:7,aspect:11,associ:19,assur:4,attack:7,audio:[3,4,5,6,7,8,11,13,19,20,22,23],audio_buff:[19,20,22,23],audio_folder_nam:13,audiobuff:[4,5,6,19,20,22,23],autom:11,automat:[10,13,16],avail:[2,7,10],band:6,base:[4,6,15,16,17,19,20,22,23],basi:19,basic:8,basicga:6,batch:[16,17],batch_siz:[16,17],becuas:4,been:[7,16,17,19,20,22,23],befor:0,being:[8,23],between:[5,6,7,16,17,22],bi_lstm:[4,5,8],bi_lstm_match:4,bi_lstm_prediction_:4,bidirect:8,bin:5,binari:23,bool:[13,19,20,22,23],boost:[0,10],both:[5,6],buffer:[16,17,22,23],buffer_s:22,build:[0,10],build_model:[16,17],built:[0,10],calcul:[6,16,17,19],call:[2,22],callback:[8,16,17],can:[0,2,3,4,7,8,11,13,16,17,22,23],cannot:10,captur:3,carri:5,categori:[0,10],caus:7,celebr:[0,10],center:7,cepstral:3,challeng:11,chang:[0,10],channel:[4,8],check:[13,23],checkpoint:[16,17],checkpoint_path:17,clamp_param:22,click:[0,10],clone:[0,10],close:2,cnn:4,cnn_extractor:4,cnn_matcher:4,cnn_prediction_:4,coars:7,code:2,coeffici:3,com:[0,10],come:10,command:10,compar:2,complex:7,compos:11,composit:11,comput:[16,19],conda:[0,10],configur:[2,22,23],connect:8,construct:16,constructor:3,contain:[4,7,17,22],control:7,conv2d:8,conv2d_1:8,conv2d_2:8,conv2d_3:8,conv2d_4:8,conv2d_5:8,conv6:8,convolut:[3,4],core:[11,13,19,20,22,23],correct:[4,10],correspond:[4,22,23],creat:[0,3,4,7,8,10,13,16,17],create_audio_fold:13,currect:13,current:[0,10,22,23],custom:19,cutoff:7,data:[3,4,8,13,16,17,19,20],data_simple_fm_mfcc:[3,4,8],data_simple_fm_stft:[3,4,8],dataset:[2,4,8,13,16,17,19,20],dataset_gener:13,datasetgener:3,datesetgener:[11,12],deactiv:[0,10],deap:10,debug:[0,10],decai:7,decript:23,deep:[2,3,5,16],definit:17,delai:7,dens:8,dense_1:8,dense_2:8,dense_3:8,dense_4:8,dense_5:8,dense_6:8,dense_7:8,depend:[0,10],depth:7,describ:3,descript:[7,22,23],design:4,desir:[16,17],detail:23,determin:[0,10],detun:7,develop:[0,10,13,23],dex:[2,3,4,6,7],dexed_simple_fm:[3,4,6,7],dexed_simple_fm_init:7,dict:[22,23],dictionari:[22,23],differ:[2,7],differen:7,dimens:[19,20],dimension:[16,19,20],directori:[0,13],disk:[4,6,19,20],displai:23,distribut:[5,10],doc:[13,16,17],doe:[16,17],don:[10,19],dowload:2,download:[0,2,10],dropout:8,dropout_1:8,dropout_2:8,dure:[17,22],dx7:[2,7],dylib:[0,10],dynamic_lookup:[0,10],each:[4,5,6,8,19],earli:11,earlystop:8,easiest:10,edit:7,effect:[22,23],either:[22,23],electron:11,emerg:16,empti:17,emul:[2,7],enabl:10,encourag:0,end:4,engin:[0,10,22],ensur:3,entir:[16,17,19,20],env:[0,7,10],envelop:7,environ:[0,9],epoch:[8,16,17],error:[0,5,6,16,17],estim:[2,4,5,8,11,15,16,17],estimator_bas:[15,17],estimatorbas:[11,14,17],eval_gener:3,evalu:[2,4,6,11],evaluation_stat:5,everi:6,exact:[0,10],exampl:[2,3],except:[10,19],exist:[0,10],expect:[3,4],experi:[1,3,7,11],explor:11,extend:7,extra:[0,10],extract:[3,4,8,19,20],extractor:[3,4,6,20],fals:[13,19,20,22],far:0,featur:[3,4,6,8,11,13,19,20],features_bas:[13,19,20],features_filenam:13,featuresbas:[11,13,18],fed:8,fedden:[0,10,16],feddon:23,feedback:7,fft:6,fft_size:[3,4],figur:11,file:[0,3,4,5,6,7,10,13,16,17,19,20,22,23],file_nam:13,file_prefix:[3,13],filenam:13,filepath:[16,17],filter:7,fine:7,first:[3,7,10,23],fit:[6,8,16,17,19,20],fit_norm:[19,20],fit_normalizers_2d:[19,20],fit_normalizers_3d:[19,20],fit_normalizers_full_data:[19,20],fit_normalizers_onli:13,fit_transform:19,fix:[7,16,17],flag:[0,7,10],flaot:[22,23],flatten:[4,8],focu:[7,11],folder:[4,6,8,13],follow:[0,10],forc:22,form:23,format:[16,17],frame:[4,19,20],frame_s:19,free:[2,7],freer:11,freez:7,frequenc:[3,7],from:[0,2,3,4,5,8,10,13,16,17,19,20,22,23],frozen:[22,23],fulldatastandardscal:19,fulli:[7,8],further:23,futur:[3,19,20],ga_extractor:6,ga_match:6,ga_predicition_:6,gain:7,gener:[2,4,5,11,13,17,23],generictfmodel:17,genet:[2,4,5],get:[0,4,7,11,22,23],get_audio:[22,23],get_featur:[19,20],get_paramet:[22,23],get_patch:[22,23],get_random_exampl:[22,23],git:[0,2,10],github:[0,2,10],given:[15,17],global:7,goal:2,going:7,good:0,grayscal:4,ground:[8,16,17],guid:11,handl:4,has:[7,16,17,22,23],has_norm:[19,20],have:[2,7,8,10,19,20,22,23],haven:[0,2],hdf5:[16,17],header:[0,10],help:4,helper:6,her:[8,11],here:[0,2,3,8,10],hidden:16,higher:10,highway_lay:[8,16],highway_layer_1:8,highway_layer_2:8,highway_layer_3:8,highway_layer_4:8,highway_layer_5:8,highwaylay:8,hop:19,hop_siz:[3,4,6,19],hopefulli:0,hour:6,how:[3,4,10],http:[0,10],hwyblstm:8,icon:[0,10],ieee:16,imag:[4,8],implement:[15,17,19],implent:17,includ:[0,10,13,22,23],incom:4,independ:19,index:[10,11,22,23],indic:[19,20,22,23],individu:6,inform:10,inherit:[8,13],inididu:6,initi:4,input:[4,8,15,16,17,19,20],input_shap:[16,17],insid:[0,10],instal:[2,9,11],instanc:[6,7,16,17],instanti:8,instruct:[0,2,10],integ:4,intellig:[11,16],interact:[0,10,23],inverno:16,is_valid_parameter_set:23,istanti:[16,17],john:16,jorshi:0,jshier:13,json:[3,4,5,6,7,22,23],juce:[0,10],jucer:[0,10],kei:[7,22,23],kera:[8,16,17],keyword:[16,17,20,23],king:16,known:11,kwarg:[16,17,20,23],label:[16,17],lambda:[4,19,20],larger:19,last:22,later:[19,20],latter:7,lauri:11,layer:16,lboost:[0,10],learn:[2,3,5,11,16],leav:10,left:7,len:[4,6],length:[3,22,23],leon:[16,23],let:7,level:7,lfo:7,lib:[0,10],librari:[0,3,4,6,7,10,11],librenderman:[0,10,23],librendman:10,librosa:10,like:0,line:10,linker:[0,10],linux:10,list:[16,17,22,23],load:[3,4,5,6,7,8,16,17,19,20,22,23],load_fold:[4,5,6],load_model:[16,17],load_model_from_checkpoint:[16,17],load_norm:[4,19,20],load_patch:[22,23],load_plugin:23,load_stat:[3,4,6,22,23],load_weight:[16,17],locat:[0,10,17,19,20,22,23],lock:[7,22],logger:8,longer:3,look:[0,10],lpython3:[0,10],lstm:[4,11,14],lstm_1:8,lstm_2:8,lstm_extractor:4,lstm_matcher:4,lstm_prediction_:4,mac:[0,10],macosx:[0,10],made:[0,5],magnitud:[3,4,6],magnitudestft:4,mai:6,make:[0,2,10],manual:[7,10],map:[22,23],mark:16,master:7,match:[1,5,11],matplotlib:[5,10],matrix:[16,17,19],matthew:16,mean:[5,16,17,19],mean_abs_error:5,measur:5,mel:3,method:[15,16,17,22],metric:5,mfcc:[4,5,6,11,18,20],mfcceval:5,mffc:20,middl:7,midi:22,midi_not:[22,23],midi_veloc:[22,23],mlp:[4,8],mlp_extractor:4,mlp_matcher:4,mlp_prediction_:4,mod:7,mode:[0,7],model:[2,3,16,17],modif:[19,20],modifi:[0,4,10,19,20,23],modul:[7,11],monitor:8,monophon:23,more:11,most:[0,7,10],motiv:11,move:[0,10],multi:6,music:11,must:[10,13,15,19,22,23],name:[4,10,11,13,22,23],natur:4,ndarrai:[16,17,19,20],necassari:13,need:[8,19],network:[3,4,16],neural:3,new_siegel_env:10,new_spiegel_env:10,ngen:6,nine:7,non:[8,22,23],none:[8,16,17,23],normal:[3,4,13,19,20],normalizererror:19,note:[3,22],note_length_sec:[3,4,6,22,23],notebook:[2,7],now:[0,4,6,7,8,10],npy:[3,8,13],nsga3:6,nsga_extractor:6,nsga_match:6,nsga_prediction_:6,num_mfcc:[3,4,6,20],num_output:[16,17],number:[4,13,16,17,19,20,22,23],numpi:[5,8,10],object:[4,5,6,13,19,20],occur:[16,17],off:7,one:[3,4,6,8,19,20],onli:[0,7,10],onlin:2,open:[0,2,7,10],oper:[7,10],oppos:3,option:[0,4,7,10,13,16,17,19,20,22,23],order:[2,4,7,10,22,23],org:[],orient:[3,19],oscil:7,osx:[0,10],other:[7,10,16],otherwis:[16,17],ouptut:3,our:[0,8,10],out:[0,5,11],outer:16,output:[3,4,6,7,8,13,16,17,19,20],output_fold:[3,13],overrid:[7,22,23],overridden:[3,6,7,22,23],overridden_param:22,overridden_paramet:7,overriden:4,packag:[0,10,23],page:[2,11],param:[4,6,7,8],param_rang:22,param_str:23,paramet:[2,3,7,8,13,15,16,17,19,20,22,23],parameter:23,parameter_index:23,parameter_valu:23,pars:23,parse_paramet:23,pass:[16,17,22,23],patch:[3,8,13,22,23],patches_filenam:13,path:[0,10,16,17,22,23],patienc:8,per:[19,20],per_feature_norm:19,perform:[2,4,5,6,7,19],philosophi:11,pickl:[13,19,20],pioneer:11,pip:[0,9],pipelin:[4,19,20],pitch:7,pkl:[3,4],pleas:10,plot:[5,8],plot_hist:5,plt:5,plug:[3,4,6,7],plugin:23,plugin_path:23,point:0,pop_siz:6,popul:6,portion:3,possibl:2,pre:[10,13,19,20],predict:[4,15,16,17],prefix:13,prenorm:[19,20],prevent:[16,17],prior:[4,8],proce:10,process:[11,19,20,23],produc:5,program:[2,11,16],programmat:[0,7,10],project:[0,2,11],projuc:[0,10],propos:16,provid:[2,4,10,16,17,19,20,22,23],py36:[0,10],pypi:10,pyplot:5,python37:[0,10],python3:[0,10],python:[0,2,10],random:[3,13,22,23],randomize_patch:[22,23],rang:[4,6,7,22],rate:[7,19,22],raw:4,recommend:[0,10],refer:[0,10,22,23],regular:10,rel:8,releas:[3,7],reli:23,reload:7,remov:[0,10,22,23],renam:[0,10],render:[3,13,22,23],render_length_sec:[3,4,6,22,23],render_patch:[22,23],rendered_patch:22,renderengin:[0,10],renderman:[0,2,9],replic:2,repo:[0,2,10],requir:[4,9,13],reshap:[4,8],reson:7,result:[2,3,4,5,6,19,20,22,23],retiari:[],reus:7,rms_error:[16,17],root:[16,17],run:[0,2,3,4,6,10,16,17,19,20],same:[3,4],sampl:[4,6,19,22],sample_r:[19,22],sandbox:10,save:[3,4,5,6,7,8,13,16,17,19,20,22,23],save_audio:[3,13],save_model:[8,16,17],save_norm:[3,13,19,20],save_st:[7,22,23],save_stats_json:5,save_weight:[16,17],saved_model:[4,8],savedmodel:[16,17],scale:[7,19],scaler:[19,20],search:[0,10,11],second:[3,22],section:10,see:[0,2,10,16,17,20,23],select:7,self:19,sensit:7,seper:3,sequenti:8,sequential_1:8,sequential_2:8,sequential_3:8,seri:4,serv:11,set:[0,3,4,6,7,8,13,16,17,19,20,22,23],set_norm:[19,20],set_overridden_paramet:[7,22,23],set_patch:[22,23],setup:[0,3,4,6,7,8],sever:[2,6],shape:[4,8,16,17,22,23],she:11,should:[0,15,17,19,20,22],show:[5,7,10],shuffl:[16,17],shuffle_s:[16,17],signal:3,simpl:7,simple_fm_bi_lstm:[4,8],simple_fm_cnn:[4,8],simple_fm_lstm:[4,8],simple_fm_mlp:[4,8],simplifi:7,sine:7,singl:[4,6,16,17],site:[0,10],six:7,size:[3,13,16,17,19,22],skip_overridden:[22,23],sklean:[19,20],slice:[4,8],small:[3,7],some:[0,4,7,15,19,20],somewher:0,sort:4,sound:[1,3,5,7,11,16],soundmatch:[4,6],sourc:[2,7],space:[16,19],specif:[0,4,10,22,23],specifi:[4,10],spectral:6,spectralsummar:6,speed:7,speigel:10,spiegel:[0,2,3,4,5,6,7,8,10,13,15,16,17,19,20,22,23],squar:[16,17],start:[7,11],state:[22,23],std:19,step:3,stft:[4,8,19],still:10,str:[13,16,17,19,20,22,23],straightforward:0,string:[16,17,23],sub:[0,10],subset:7,success:[0,10],suffix:[16,17],summar:[5,6],summari:8,support:10,sure:[0,2,10],sustain:7,sync:7,synth:[3,4,6,7,8,11,13,22,23],synth_bas:[13,22,23],synth_param:[3,4,6,7],synth_vst:23,synthbas:[11,13,21,23],synthes:[0,2,3,4,10,11,13,15,16,17,22,23],synthvst:[3,4,6,7,11,21],system:[0,10],take:6,target:[2,4,5,6,16,17],techniqu:16,technolog:11,tensflow:[16,17],tensor:[16,17],tensorflow:[3,8,10,16,17],test:[0,3,5,10,13,16,17],test_:3,test_featur:8,test_patch:8,testfeatur:8,testparam:8,tf_estimator_bas:[16,17],tfepochlogg:8,tfestimatorbas:[4,8,11,14,16],than:3,thei:10,thi:[0,2,3,4,5,6,7,10,11,16,17,19,20,22,23],thing:0,those:11,through:[2,7,10],throughout:7,time:[4,8,10],time_major:[3,4,19],time_slic:[3,19],topic:16,total:[3,8,22,23],tqdm:10,train:[2,3,4,13,16,17,19,20],train_:3,train_featur:8,train_patch:8,trainabl:8,trainfeatur:8,trainparam:8,transact:16,transform:[19,20],treat:7,truth:[8,16,17],tune:7,tupl:[16,17,22,23],turn:7,two:[6,7],type:[2,4,8,19,20,22,23],unaffect:23,undefin:[0,10],under:10,uneffect:22,updat:[0,7,10,22,23],use:[0,2,4,7,10,13,16,17,19,20],used:[2,3,4,5,6,8,10,13,19,20,22,23],user:[0,10,13],usernam:[0,10],uses:[0,4,6,10],using:[2,3,4,6,7,8,10,11,16,17,19,20],val_loss:8,valid:[3,8,16,17,23],valu:[3,7,8,19,22,23],variabl:[13,22],variou:[7,11],veloc:[7,22],version:[0,10],virtual:[0,10],visit:11,vst:[0,2,3,4,6,7,10,16,23],wai:[3,7,10],want:[0,10],wav:[3,4,6],wave:7,waveform:7,websit:11,weight:[16,17],weights_path:17,welcom:0,were:[4,10],whatev:[0,10,11],when:[0,4,7,10,17],where:[0,10,19,20,22,23],whether:[13,19,20,22,23],which:[0,3,5,6,7,8,10,11,19,20],with_traceback:19,within:[0,10,13],without:0,work:[0,3,10,11,13,19],worri:3,would:0,wrap:[0,10],write:10,xcode:[0,10],y_pred:[16,17],y_true:[16,17],yamaha:[2,7],yee:16,yet:22,yml:0,you:[0,2,3,10],your:[0,10]},titles:["Contribution Guide","Examples","FM Sound Match Experiment","Dataset Generation","Sound Match Deep Learning Models","Evaluation","Sound Match Genetic Algorithm Estimators","Synthesizer Configuration","Train Deep Learning Models","Getting Started","Installation","SpiegeLib","SPIEGEL Core Classes","DatasetGenerator Class","Estimator Classes","EstimatorBase Class","LSTM Class","TFEstimatorBase","Audio Feature Extraction Classes","FeaturesBase Class","FeaturesBase Class","Synth Classes","SynthBase Class","SynthVST Class"],titleterms:{"class":[12,13,14,15,16,18,19,20,21,22,23],"long":8,"short":8,algorithm:6,anaconda:10,audio:18,basic:6,cnn:[5,8],configur:7,contribut:[0,11],convolut:8,core:12,dataset:3,datasetgener:13,deep:[4,8],direct:8,domin:6,environ:10,estim:[6,14],estimatorbas:15,evalu:[3,5],exampl:[1,11],experi:2,extract:18,featur:18,featuresbas:[19,20],first:11,gener:[0,3],genet:6,get:9,guid:0,highwai:8,histogram:5,iii:[5,6],indic:11,instal:[0,10],layer:8,learn:[4,8],lstm:[5,8,16],match:[2,4,6],memori:8,mfcc:3,mlp:5,model:[4,8],multi:8,network:8,neural:8,non:6,nsga:[5,6],perceptron:8,pip:10,refer:11,renderman:10,requir:10,section:2,sort:6,sound:[2,4,6],spiegel:[11,12],spiegelib:11,start:9,step:11,stft:3,synth:21,synthbas:22,synthes:7,synthvst:23,tabl:11,term:8,tfestimatorbas:17,train:8}})