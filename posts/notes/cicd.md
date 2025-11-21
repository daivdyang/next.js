# CICD
### Nuget
* (查詢nuget在本機所使用的路徑位置列表) cmd : [nuget locals all -list](https://docs.microsoft.com/zh-tw/nuget/consume-packages/managing-the-global-packages-and-cache-folders)
* (nuget.config設定)[nuget.config reference](https://docs.microsoft.com/zh-tw/nuget/reference/nuget-config-file)
* cmd: [nuget update](https://docs.microsoft.com/zh-tw/nuget/reference/cli-reference/cli-ref-update)

### How To Install Manually Jenkins Plugin
  * Step 1: First download plugin from Jenkins plugin directory.  
  https://updates.jenkins-ci.org/download/plugins/
  * Step 2: Here you find your desired plugin and clicked on plugin name, now .hpi file will downloaded.
  * Step 3: Now open Jenkins and go to Manage Jenkins > Manage Plugins > Advance configuration(tab)
  * Step 4: Upload your-plugin.hpi file and save.
  * Step 5: Restart Jenkins.

